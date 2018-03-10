class Inventory < ApplicationRecord
  belongs_to :character
  has_many :obtainables
  has_many :items, :through => :obtainables

  serialize :collection
  serialize :weapon
  serialize :armor
  serialize :slot_1
end
