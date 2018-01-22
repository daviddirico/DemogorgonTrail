class Api::V1::EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = User.find_by(id: session[:user_id])
    campaign = user.campaign
    event = Event.find_by(campaign_id: campaign.id)

    if event
      render json: { event: event }
    else
      render json: { event: false }
    end
  end

  def create
    user = User.find_by(id: session[:user_id])
    campaign = user.campaign
    event = Event.new
    event.campaign_id = campaign.id
    event.invoked = true

    event_type = params["event_type"]

    if event_type === "random_event"
      random_event = rand(0 .. 99)
      if random_event <= 80
        event.name = "enemy"
      else
        event.name = "loot"
      end
    else
      event.name = event_type
    end


    if event.name == "loot" || event.name == "enemy"
      rarity = rand(0 .. 99)
      intensity = rand(0 .. 99)
      if rarity <= 97
        event.rare = nil
      else
        event.rare = true
      end

      if event.name == "enemy"
        hero = Character.find_by(user_id: user.id, hero: true)
        characters = Character.where(hero: false)


        evaluator = 0
        if intensity < 50
          evaluator = 1
        elsif intensity >= 50 && intensity < 80
          evaluator = 2
        elsif intensity >= 80 && intensity < 97
          evaluator = 3
        else
          evaluator = rand(4 .. 6)
        end

        level = hero.level
        enemies = []
        evaluator.times do
          enemies << characters.where("level <= ?", level).sample
        end
        event.info = enemies

        if event.save
          render json: { event: event }
        end
      # else
        # put stuff here for event.name === "loot"
      end
    end
  end

end
