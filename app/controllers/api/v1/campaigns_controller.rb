class Api::V1::CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    campaign = Campaign.find_by(user_id: session[:user_id])
    if campaign
      render json: { campaign: campaign }
    end
  end

  def show
  end

  def create
    current_user = User.find_by(id: session[:user_id])
    campaign = Campaign.new
    campaign.user_id = current_user.id
    campaign.difficulty = "easy"
    campaign.completion = 0
    if campaign.save
      render json: campaign
    end
  end

end
