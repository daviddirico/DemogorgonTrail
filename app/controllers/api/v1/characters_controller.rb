class Api::V1::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    # character = Character.find_by(user_id: session[:user_id])
    character = Character.where(user_id: session[:user_id]).first
    if character != nil
      render json: { character: character }
    else
      render json: { character: nil }
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
    character.strength = 5
    character.defense = 8
    character.hitpoints = 10
# the logic behind strength defense and hp: (leveling up will affect these characteristics)
#   humans have even strength, defense and HP
#   dwarves have high strength, high HP, very low defense
#   elves have high defense, even HP, and low strength

# for classes - leveling up will also reflect these characteristics
#   warriors have high HP, even strength, and low defense
#   rangers have high defense, even HP, and low strength
#   wizards have high strength, even defense, and low HP
    if character.save
      render json: { character: character }
    else
      render json: { character: nil }
    end
  end

  def update
    attributes = JSON.parse(request.body.read)

    character_id = attributes["id"]
    character = Character.find_by(id: character_id)

    current_experience = attributes["experience"]
    current_level = attributes["level"]
    experience_gained = attributes["experience_gained"]


    if current_experience < 10000
      current_experience += experience_gained
      if current_experience > 10000
        current_experience = 10000
      end
    end

    experience_needed = (5 * (current_level + 1) ** 3) / 4
    while current_experience >= experience_needed && current_level < 20 do
      current_level += 1
      experience_needed = (5 * current_level ** 3) / 4
    end

    # this is the section where my stat-gaining algorithm comes in depending on what level the character is

    character.experience = current_experience
    character.level = current_level
    if character.save
      render json: { character: character }
    else
      render json: { character: {} }
    end
  end

  def destroy
  end

end
