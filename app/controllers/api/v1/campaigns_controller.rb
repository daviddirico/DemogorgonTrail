class Api::V1::CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
  end

  def create
    binding.pry
    attributes = JSON.parse(request.body.read)
    campaign = Campaign.new
    campaign.user_id = attributes["id"]
    campaign.difficulty = "easy"
    campaign.completion = 0
    binding.pry
    if campaign.save
      render json: campaign
    end
  end

end
