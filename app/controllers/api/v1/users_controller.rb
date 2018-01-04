class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!
  # protect_from_forgery unless: -> { request.format.json? }
  # serialization_scope :current_user

  def index
    render json: User.all
  end

  def create
    binding.pry
    user = User.new
    user.username = params["username"]
    user.email = params["email"]
    user.password = params["password"]
    user.password_confirmation = params["password_confirmation"]
    user.profile_photo = params["profile_photo"]
    # binding.pry
    if user.save
      render json: user
    end
  end

end
