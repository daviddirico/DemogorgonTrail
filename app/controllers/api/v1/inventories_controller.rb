class Api::V1::InventoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    campaign = Campaign.find_by(user_id: session[:user_id])
    character = Character.find_by(campaign_id: campaign.id)
    inventory = Inventory.find_by(character_id: character.id)
    binding.pry
    if inventory
      render json: { inventory: inventory }
    end
  end

  def show
  end

  def create
    campaign = Campaign.find_by(user_id: session[:user_id])
    character = Character.find_by(campaign_id: campaign.id)
    inventory = Inventory.new(character_id: character.id)
    binding.pry
    if inventory.save
      render json: { inventory: inventory }
    end
  end

end
