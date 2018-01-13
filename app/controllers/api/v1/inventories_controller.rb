class Api::V1::InventoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    campaign = Campaign.find_by(user_id: session[:user_id])
    character = Character.find_by(campaign_id: campaign.id)
    inventory = Inventory.find_by(character_id: character.id)
    # inventory = User.find_by(id: session[:user_id]).campaign.character.inventory
    if inventory
      render json: { inventory: inventory }
    end
  end

  def show
  end

  def create
    character = User.find_by(id: session[:user_id]).campaign.character
    inventory = Inventory.new(character_id: character.id)
    if inventory.save
      render json: inventory
    end
  end

end
