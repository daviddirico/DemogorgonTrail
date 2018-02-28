class Inventory < ApplicationRecord
  belongs_to :character
  has_many :obtainables
  has_many :items, :through => :obtainables
end
