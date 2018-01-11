class Character < ApplicationRecord
  belongs_to :campaign
  has_one :inventory

  validates :name, presence: true
  validates :race, presence: true
  validates :class, presence: true
  validates :level, presence: true
  validates :strength, presence: true
  validates :defense, presence: true
  validates :hitpoints, presence: true

end
