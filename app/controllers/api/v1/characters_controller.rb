class Api::V1::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    items = Item.all
    characters = Character.where(user_id: session[:user_id], hero: true)
    current_character = characters.find_by(gameover: false)
    inventory = current_character.inventory

    if current_character
      render json: { character: current_character, inventory: inventory }
    else
      render json: { character: nil, inventory: nil }
    end
  end

  def show
  end

  def create
    character = Character.new
    character.user_id = User.find_by(id: session[:user_id]).id
    character.name = params["name"]
    character.hero = true
    character.race = params["race"]
    character.classification = params["classification"]
    character.level = 1
    character.current_hitpoints = 10
    character.max_hitpoints = 10
    if character.race === "human"
      character.current_strength = 6
      character.max_strength = 6
      character.current_defense = 6
      character.max_defense = 6
      character.current_speed = 6
      character.max_speed = 6
    elsif character.race === "elf"
      character.current_strength = 6
      character.max_strength = 6
      character.current_defense = 6
      character.max_defense = 6
      character.current_speed = 6
      character.max_speed = 6
    else
      character.current_strength = 6
      character.max_strength = 6
      character.current_defense = 6
      character.max_defense = 6
      character.current_speed = 6
      character.max_speed = 6
    end


    if character.save
      inventory = Inventory.new
      inventory.user_id = character.id
      inventory.collection = []
      inventory.save

      render json: { character: character }
    else
      render json: { character: nil }
    end
  end

  def update
    user = User.find_by(id: session[:user_id])
    characters = Character.where(user_id: user.id, hero: true)
    character = characters.find_by(gameover: false)
    character.recent_changes = []

    beginning_level = character.level
    beginning_experience = character.experience
    beginning_hp = character.current_hitpoints

    enemies = user.campaign.event.info

    result = params["battle_choice"]
    if result === "fight"
      character.battle(character, enemies, beginning_hp)
      if character.current_hitpoints > 0
        character.experience_gain(character, enemies, beginning_experience)
        character.level_gain(character, beginning_level)
      else
        character.gameover = true
        character.recent_changes = ["gameover"]
      end
    elsif result === "run"
      character.run(character, enemies, beginning_hp)
    end

    if character.save
      render json: { character: character }
    else
      render json: { character: nil }
    end
  end


end
