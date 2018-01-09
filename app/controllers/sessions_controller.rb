class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
    user = User.find_by(email: params["email"])
    if user && user.authenticate(params["password"])
      log_in(user)
      render json: user
    end
  end

  def destroy
    log_out
    render json: User.all
  end

end
