class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: {users: User.all }
  end

  def create
    binding.pry
    username = params["username"]
    email = params["email"]
    encrypted_password = params["encrypted_password"]
    profile_photo = params["profile_photo"]
    matching_user = User.where(username: params["username"], email: params["email"])
    if matching_user == []
      user = User.new
      user.username = params["username"]
      user.email = params["email"]
      user.encrypted_password = params["encrypted_password"]
      binding.pry
      user.profile_photo = params["profile_photo"]
      binding.pry
      if user.save
        render json: user
      else
        render json: { error: event.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Requested username or email address has already been registered, please select something different" }, status: :unprocessable_entity
    end
  end

end
