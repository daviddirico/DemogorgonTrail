class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  protected

  def user_params
    params.require(:user).permit(:sign_up, keys: [:username, :profile_photo])
    params.require(:user).permit(:account_update, keys: [:username, :profile_photo])
  end
end
