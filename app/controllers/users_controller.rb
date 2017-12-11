class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    render json: User.all
  end

  # def create
  #
  #   binding.pry
  #   attributes = JSON.parse(request.body.read)
  #   matching_user = User.where(username: attributes["username"], email: attributes["email"])
  #   if matching_user == []
  #     user = User.new(attributes)
  #     if user.save
  #       user.create
  #       render json: user
  #     else
  #       render json: { error: event.errors.full_messages }, status: :unprocessable_entity
  #     end
  #   else
  #     render json: { error: "Requested username or email address has already been registered, please select something different" }, status: :unprocessable_entity
  #   end
  #
  # end
end
