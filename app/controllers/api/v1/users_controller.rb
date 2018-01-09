class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!
  # protect_from_forgery unless: -> { request.format.json? }
  # serialization_scope :current_user

  def index
    current_user = User.find_by(id: session[:user_id])
    signed_in = false
    if current_user
      signed_in = true
    else
      signed_in = false
    end
    render json: { current_user: current_user, all_users: User.all, signed_in: signed_in }
  end

  def show
  end

  def create
    user = User.new
    user.username = params["username"]
    user.email = params["email"]
    user.password = params["password"]
    user.password_confirmation = params["password_confirmation"]
    user.profile_photo = params["profile_photo"]
    if user.save
      render json: user
    end
  end

end
