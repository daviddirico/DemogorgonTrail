class Character < ApplicationRecord
  belongs_to :user
  has_many :npcs
  has_many :events, :through => :npcs
  has_one :inventory

  serialize :recent_changes

  validates :name, presence: true
  validates :race, presence: true
  validates :class, presence: true
  validates :level, presence: true
  validates :current_strength, presence: true
  validates :current_defense, presence: true
  validates :current_speed, presence: true
  validates :current_hitpoints, presence: true
  validates :max_strength, presence: true
  validates :max_defense, presence: true
  validates :max_speed, presence: true
  validates :max_hitpoints, presence: true

  def battle(character, enemies, beginning_hp)
    current_hp = character.current_hitpoints
    current_strength = character.current_strength
    current_defense = character.current_defense
    current_speed = character.current_speed
    inventory = character.inventory
    if inventory.weapon.length > 0
      current_strength += inventory.weapon[0].mod_value
    end
    if inventory.armor.length > 0
      current_defense += inventory.armor[0].mod_value
    end

    # This determines the max health of the enemies of this fight without affecting the character records of these enemies.
    e_hp = 0
    enemies.each do |enemy|
      e_hp += enemy.current_hitpoints
    end

    # As long as both sides are still alive, do this:
    while e_hp > 0 && current_hp > 0
      break if e_hp <= 0 || current_hp <=0
      remaining_speed = current_speed
      # fighting one enemy at a time
      enemies.each do |enemy|
        break if e_hp <= 0 || current_hp <=0
        enemy_speed = enemy.current_speed
        enemy_hp = enemy.current_hitpoints
        # evaluating the damage output for you and the enemy
        if current_strength - enemy.current_defense > 0
          enemy_damage = current_strength - enemy.current_defense
        else
          enemy_damage = 1
        end

        if enemy.current_strength - current_defense > 0
          hero_damage = enemy.current_strength - current_defense
        else
          hero_damage = 1
        end

        # applying the damage in order of speed
        while enemy_hp > 0
          break if e_hp <= 0 || current_hp <=0 || enemy_hp <= 0

          if remaining_speed >= enemy_speed
            remaining_speed -= enemy_speed
            if enemy_damage > enemy_hp
              enemy_damage = enemy_hp
            end
            enemy_hp -= enemy_damage
            e_hp -= enemy_damage
          else
            enemy_speed -= remaining_speed
            remaining_speed = current_speed
            current_hp -= hero_damage
          end
        end
      end
    end

    character.current_strength = character.max_strength
    character.current_defense = character.max_defense
    character.current_speed = character.max_speed

    if beginning_hp != current_hp
      character.current_hitpoints = current_hp
      character.recent_changes << "hp"
    end
  end


  def experience_gain(character, exp_giver, beginning_experience)
    current_experience = character.experience

    # This determines the total amount of exp you gain from your latest battle based on each enemy's exp value
    experience_gained = 0
    battle_changes = false

    if exp_giver.is_a? Integer
      experience_gained = exp_giver
    else
      battle_changes = true
      exp_giver.each do |exp|
        experience_gained += exp.experience
      end
    end

    # Experience cap
    if current_experience < 10000
      current_experience += experience_gained
      if current_experience > 10000
        current_experience = 10000
      end
    end

    character.experience = current_experience

    # winning a battle will grant experience, this logic track info so that you can know what happened in the battle.
    if beginning_experience != current_experience && battle_changes == true
      character.recent_changes << "experience"
    end
  end


  def level_gain(character, beginning_level)
    current_level = character.level
    experience_needed = (5 * (current_level + 1) ** 3)/4
    while character.experience >= experience_needed && current_level < 20 do
      character.level += 1

      random_hp_increaser = rand(3 .. 7)
      character.max_hitpoints += random_hp_increaser
      character.current_hitpoints += random_hp_increaser

      high_roll = rand(3 .. 4)
      mid_roll = rand(2 .. 4)
      low_roll = rand(2 .. 3)
      if character.classification === "warrior"
        character.max_strength += mid_roll
        character.max_defense += high_roll
        character.max_speed += low_roll
        character.current_strength += mid_roll
        character.current_defense += high_roll
        character.current_speed += low_roll
      elsif character.classification === "ranger"
        character.max_strength += low_roll
        character.max_defense += mid_roll
        character.max_speed += high_roll
        character.current_strength += low_roll
        character.current_defense += mid_roll
        character.current_speed += high_roll
      else
        character.max_strength += high_roll
        character.max_defense += low_roll
        character.max_speed += mid_roll
        character.current_strength += high_roll
        character.current_defense += low_roll
        character.current_speed += mid_roll
      end
      experience_needed = (5 * (character.level + 1) ** 3)/4
    end

    if character.level === 20
      experience_needed = 10000
    end

    if beginning_level != character.level
      character.next_exp = experience_needed
      character.recent_changes << "level"
    end
  end

  def run(character, enemies, beginning_hp)
    current_speed = character.current_speed
    enemies.each do |enemy|
      break if character.current_hitpoints <= 0
      escape_chance = rand(0 .. 99)
      good_luck = rand(0 .. 99)
      run_damage = enemy.level
      if current_speed >= enemy.current_speed && good_luck <= 80
        run_damage = 0
      elsif enemy.current_speed > current_speed && escape_chance > 90
        run_damage = 0
      end
      if run_damage > 0
        character.current_hitpoints -= run_damage
      end
    end
    if character.current_hitpoints <= 0
      character.gameover = true
      character.recent_changes = ["gameover"]
    elsif beginning_hp != character.current_hitpoints
      character.recent_changes << "hp"
      character.recent_changes << "run"
    else
      character.recent_changes << "run"
    end
  end
end
