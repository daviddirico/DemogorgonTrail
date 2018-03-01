class Api::V1::InventoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = User.find_by(id: session[:user_id])
    campaign = user.campaign
    character = Character.find_by(hero: true, gameover: false, user_id: user.id)
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
    elsif attainment_type == "use"
      item_name = params["item_name"]
      item = Item.find_by(name: item_name)
      if item.mod_type == "hp"
        if (character.max_hitpoints - character.current_hitpoints) < item.mod_value
          character.current_hitpoints = character.max_hitpoints
        else
          character.current_hitpoints += item.mod_value
        end
      elsif item.mod_type == "exp"
        character.experience_gain(character, item.mod_value, character.experience)
      end

      inventory.collection.slice!(inventory.collection.index(item_name))

    elsif attainment_type == "drop"
      item_name = params["item_name"]
      inventory.collection.slice!(inventory.collection.index(item_name))
    end

    if inventory.save
      character.save
      render json: { inventory: inventory, character: character }
    else
      render json: { inventory: {} }
    end
  end

end
