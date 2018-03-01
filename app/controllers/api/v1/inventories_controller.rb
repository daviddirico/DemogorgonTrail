class Api::V1::InventoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    campaign = Campaign.where(user_id: session[:user_id]).first
    character = campaign.character
    items = Item.all
    inventory = character.inventory

    if inventory != nil
      render json: { inventory: inventory }
    else
      render json: { inventory: {} }
    end
  end

  def show
  end

  def create
    # character = User.find_by(id: session[:user_id]).character
    # inventory = Inventory.new(character_id: character.id)
    # if inventory.save
    #   render json: { inventory: inventory }
    # else
    #   render json: { inventory: {} }
    # end
  end

  def update
    user = User.find_by(id: session[:user_id])
    campaign = user.campaign
    character = Character.find_by(hero: true, gameover: false, user_id: user.id)
    inventory = character.inventory

    attainment_type = params["attainment_type"]

    if attainment_type == "find"
      event = campaign.event
      item = event.info[0]

      if item.item_type == "weapon"
        inventory.weapon = item.name
      elsif item.item_type == "armor"
        inventory.armor = item.name
      elsif item.item_type == "special"
        ingentory.slot_1 = item.name
      else
        inventory.collection << item.name
      end
    end

    if inventory.save
      render json: { inventory: inventory }
    else
      render json: { inventory: {} }
    end
  end

end
