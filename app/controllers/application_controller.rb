class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include SessionsHelper

  helper_method :current_user

  protected

  def user_params
    params.require(:user).permit(:sign_up, keys: [:username, :profile_photo])
    params.require(:user).permit(:account_update, keys: [:username, :profile_photo])
  end



  # private
  #
  # def current_user
  #  @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end
end
