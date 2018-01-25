class Api::V1::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    characters = Character.where(user_id: session[:user_id])
    current_character = characters.find_by(gameover: false)
    if current_character != nil
      render json: { character: current_character }
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
    character.current_hitpoints = 10
    character.max_hitpoints = 10
    if character.race === "human"
      character.current_strength = 6
      character.max_strength = 6
      character.current_defense = 6
      character.max_defense = 6
    elsif character.race === "elf"
      character.current_strength = 4
      character.max_strength = 4
      character.current_defense = 8
      character.max_defense = 8
    else
      character.current_strength = 8
      character.max_strength = 8
      character.current_defense = 4
      character.max_defense = 4
    end

    if character.save
      render json: { character: character }
    else
      render json: { character: nil }
    end
  end

  def update
    user = User.find_by(id: session[:user_id])
    characters = Character.where(user_id: user.id)
    character = characters.find_by(gameover: false)
    current_level = character.level
    max_str = character.max_strength
    max_def = character.max_defense
    max_hp = character.max_hitpoints
    current_experience = character.experience
    current_hp = character.current_hitpoints
    current_strength = character.current_strength
    current_defense = character.current_defense
    current_stats = character.current_strength + character.current_defense
    still_alive = true


    # enemy metrics
    enemies = user.campaign.event.info
    number = enemies.length
    e_strength = 0
    e_defense = 0
    e_stats = 0
    e_hp = 0
    enemies.each do |enemy|
      e_strength += enemy.current_strength
      e_defense += enemy.current_defense
      e_stats += enemy.current_strength + enemy.current_defense
      e_hp += enemy.current_hitpoints
    end
    e_avg_str = (e_strength/number).round(0)
    e_avg_def = (e_defense/number).round(0)
    e_avg_stats = (e_stats/number).round(0)

    result = params["battle_choice"]

    if result === "fight"
      while e_hp > 0 || current_hp > 0
        enemy_damage = (current_strength - e_avg_def)
        hero_damage = (e_avg_str - current_defense)
        if enemy_damage < 0
          enemy_damage = 0
        end
        if hero_damage < 0
          hero_damage = 0
        end
        if current_stats >= e_avg_stats
          e_hp -= (enemy_damage + 1)
          break if e_hp <= 0
          current_hp -= (hero_damage + number)
          break if current_hp <=0
        else
          current_hp -= (hero_damage + number)
          break if current_hp <=0
          e_hp -= (enemy_damage + 1)
          break if e_hp <= 0
        end
      end

      if current_hp > 0
        experience_gained = 0
        enemies.each do |exp|
          experience_gained += exp.experience
        end

        if current_experience < 40000
          current_experience += experience_gained
          if current_experience > 40000
            current_experience = 40000
          end
        end

        experience_needed = (5 * (current_level + 1) ** 3)
        while current_experience >= experience_needed && current_level < 20 do
          current_level += 1
          random_hp_increaser = rand(3 .. 7)
          max_hp += random_hp_increaser
          current_hp += random_hp_increaser

          high_roll = rand(3 .. 5)
          mid_roll_1 = rand(2 .. 4)
          mid_roll_2 = rand(2 .. 4)
          low_roll = rand(1 .. 3)
          if character.classification === "warrior"
            max_str += mid_roll_1
            max_def += mid_roll_2
          elsif character.classification === "ranger"
            max_str += low_roll
            max_def += high_roll
          else
            max_str += high_roll
            max_def += low_roll
          end
          experience_needed = (5 * current_level ** 3) / 4
        end

        character.experience = current_experience
        character.level = current_level
        character.max_strength = max_str
        character.max_defense = max_def
        character.current_strength = max_str
        character.current_defense = max_def
        character.max_hitpoints = max_hp
        character.current_hitpoints = current_hp
      else
        character.gameover = true
      end

    elsif result === "run"
      randomDamage = (rand(0 .. 99) + (number * 10) - 10)
      if randomDamage > 70
        character.current_hitpoints -= e_avg_str
      end
      if character.current_hitpoints <= 0
        character.gameover = true
      end
    end

    if character.save
      render json: { character: character }
    else
      render json: { character: nil }
    end
  end


end
