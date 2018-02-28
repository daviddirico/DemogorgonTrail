class Town < ApplicationRecord
  validates :name, presence: true
  validates :definition, presence: true
  validates :narrative, presence: true
  validates :objective, presence: true
  validates :town_need, presence: true
end
