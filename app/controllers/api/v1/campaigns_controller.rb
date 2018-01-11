class Api::V1::CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    current_user = User.find_by(id: session[:user_id])
    campaign = {}
    if current_user
      campaign = Campaign.where(user: current_user)
    end
    render json: { current_user: current_user, campaign: campaign }
  end

  def show
  end

  def create
    attributes = JSON.parse(request.body.read)
    campaign = Campaign.new
    campaign.user_id = attributes["id"]
    campaign.difficulty = "easy"
    campaign.completion = 0
    if campaign.save
      render json: campaign
    end
  end

end
