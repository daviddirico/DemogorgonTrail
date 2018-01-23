class Character < ApplicationRecord
  belongs_to :user
  has_many :npcs
  has_many :events, :through => :npcs
  has_one :inventory

  validates :name, presence: true
  validates :race, presence: true
  validates :class, presence: true
  validates :level, presence: true
  validates :strength, presence: true
  validates :defense, presence: true
  validates :hitpoints, presence: true

  # def self.run_evaluation(enemies)
  #   binding.pry
  #   user = User.find_by(id: session[:user_id])
  #   hero = Character.find_by(user_id: user.id)
  #   number = enemies.length
  #   e_strength = 0
  #   enemies.each do |enemy|
  #     e_strength += enemy.strength
  #   end
  #   randomDamage = rand(0 .. 99)
  #   if randomDamage > 70
  #     hero.hitpoints -= (e_strength/number).round(0)
  #   end
  #   binding.pry
  # end
  #
  # def self.battle_evaluation(enemies)
  #   number = enemies.length
  #   e_level = 0
  #   e_strength = 0
  #   e_defense = 0
  #   e_hitpoints = 0
  #   enemies.each do |enemy|
  #
  #   end
  # end

end
