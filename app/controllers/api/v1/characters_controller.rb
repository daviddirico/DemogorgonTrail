class Api::V1::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    # current_user = User.find_by(id: session[:user_id])
    # campaign = {}
    # if current_user
    #   campaign = Campaign.where(user: current_user)
    # end
    # render json: { current_user: current_user, campaign: campaign }
  end

  def show
  end

  def create
    binding.pry

    campaign_id
    character = Character.new
    character.name = params["name"]
    character.hero = true
    character.race = params["race"]
    character.class = params["class"]
    character.level = 1
    strength
    defense
    hitpoints
# the logic begind strength defense and hp: (leveling up will affect these characteristics)
#   humans have even strength, defense and HP
#   dwarves have high strength, high HP, very low defense
#   elves have high defense, even HP, and low strength

# for classes - leveling up will also reflect these characteristics
#   warriors have high HP, even strength, and low defense
#   rangers have high defense, even HP, and low strength
#   wizards have high strength, even defense, and low HP

    binding.pry
    if character.save
      render json: character
    end
  end

end
