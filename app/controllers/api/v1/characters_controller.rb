class Api::V1::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    characters = Character.where(user_id: session[:user_id])
    current_character = characters.find_by(gameover: false)
    if current_character
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
      render json: { character: character }
    else
      render json: { character: nil }
    end
  end

  def update
    user = User.find_by(id: session[:user_id])
    characters = Character.where(user_id: user.id)
    character = characters.find_by(gameover: false)
    character_changes = []
# level
    current_level = character.level
      beginning_level = character.level
# experience
    current_experience = character.experience
      beginning_experience = character.experience
# hp
    current_hp = character.current_hitpoints
      beginning_hp = character.current_hitpoints
      max_hp = character.max_hitpoints
# strength
    current_strength = character.current_strength
      max_str = character.max_strength
# defense
    current_defense = character.current_defense
      max_def = character.max_defense
# speed
    current_speed = character.current_speed
      max_spd = character.max_speed
# total stats
    current_stats = current_strength + current_defense + current_speed

# enemy metrics
    enemies = user.campaign.event.info
    e_hp = 0
    enemies.each do |enemy|
      e_hp += enemy.current_hitpoints
    end


    result = params["battle_choice"]

    if result === "fight"
      while e_hp > 0 || current_hp > 0
        break if e_hp <= 0 || current_hp <=0
        remaining_speed = current_speed
        enemies.each do |enemy|
          break if e_hp <= 0 || current_hp <=0
          if remaining_speed <= 0
            remaining_speed = current_speed
          end
            enemy_hp = enemy.current_hitpoints
          enemy_damage = (current_strength - enemy.current_defense)
          hero_damage = (enemy.current_strength - current_defense)
          if enemy_damage < 0
            enemy_damage = 0
          end
          if hero_damage < 0
            hero_damage = 0
          end
          final_enemy_damage = enemy_damage + 1
          final_hero_damage = hero_damage + 1

          if remaining_speed >= enemy.current_speed
            remaining_speed -= enemy.current_speed
            if final_enemy_damage > enemy_hp
              final_enemy_damage = enemy_hp
              enemy_hp -= (final_enemy_damage)
            end
            e_hp -= (final_enemy_damage)
            break if e_hp <= 0
            if enemy_hp > 0
              current_hp -= (final_hero_damage)
            end
            break if current_hp <=0
          else
            remaining_speed -= enemy.current_speed
            current_hp -= (final_hero_damage)
            break if current_hp <=0
            enemy_hp -= (final_enemy_damage)
            e_hp -= (final_enemy_damage)
            break if e_hp <= 0
          end
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
        experience_needed = (5 * (current_level + 1) ** 3)/4
        while current_experience >= experience_needed && current_level < 20 do
          current_level += 1
          random_hp_increaser = rand(3 .. 7)
          max_hp += random_hp_increaser
          current_hp += random_hp_increaser

          high_roll = rand(3 .. 4)
          mid_roll = rand(2 .. 4)
          low_roll = rand(2 .. 3)
          if character.classification === "warrior"
            max_str += mid_roll
            max_def += high_roll
            max_spd += low_roll
          elsif character.classification === "ranger"
            max_str += low_roll
            max_def += mid_roll
            max_spd += high_roll
          else
            max_str += high_roll
            max_def += low_roll
            max_spd += mid_roll
          end
          experience_needed = (5 * (current_level + 1) ** 3)/4
        end

        character.experience = current_experience
        character.next_exp = experience_needed
        character.level = current_level
        character.max_strength = max_str
        character.max_defense = max_def
        character.max_speed = max_spd
        character.current_strength = max_str
        character.current_defense = max_def
        character.current_speed = max_spd
        character.max_hitpoints = max_hp
        character.current_hitpoints = current_hp

        if beginning_hp != current_hp
          character_changes << "hp"
        end
        if beginning_experience != current_experience
          character_changes << "experience"
        end
        if beginning_level != current_level
          character_changes << "level"
        end
        character.recent_changes = character_changes
      else
        character.gameover = true
        character_changes << "gameover"
        character.recent_changes = character_changes
      end

    elsif result === "run"
      enemies.each do |enemy|
        luck = rand(0 .. 99)
        if luck > 70 && enemy.current_speed >= current_speed
          run_damage = enemy.strength - current_defense
          if run_damage < 0
            run_damage = 0
          end
          character.current_hitpoints -= run_damage
        end
      end
      if character.current_hitpoints <= 0
        character.gameover = true
        character_changes << "gameover"
        character.recent_changes = character_changes
      elsif beginning_hp != current_hp
        character_changes << "hp"
        character.recent_changes = character_changes
      else
        character_changes << "run"
        character.recent_changes = character_changes
      end
    end

    if character.save
      render json: { character: character }
    else
      render json: { character: nil }
    end
  end


end
