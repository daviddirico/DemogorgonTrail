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

end
