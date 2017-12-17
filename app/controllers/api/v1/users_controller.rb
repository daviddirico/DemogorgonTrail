class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  serialization_scope :current_user

  def index
    render json: current_user, serializer: CurrentUserSerializer
  end

  def create
    binding.pry
    @username = params["username"]
    @email = params["email"]
    @encrypted_password = params["encrypted_password"]
    @profile_photo = params["profile_photo"]
    matching_user = User.where(username: @username, email: @email)
    if matching_user == []
      user = User.new
      user.username = @username
      user.email = @email
      user.encrypted_password = @encrypted_password
      user.profile_photo = @profile_photo
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
