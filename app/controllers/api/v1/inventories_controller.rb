class Api::V1::InventoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    # character = Character.find_by(user_id: session[:user_id])
    character = Character.where(user_id: session[:user_id]).first
    inventory = Inventory.find_by(character_id: character.id)
    if inventory != nil
      render json: { inventory: inventory }
    else
      render json: { inventory: {} }
    end
  end

  def show
  end

  def create
    character = User.find_by(id: session[:user_id]).character
    inventory = Inventory.new(character_id: character.id)
    if inventory.save
      render json: { inventory: inventory }
    else
      render json: { inventory: {} }
    end
  end

end
