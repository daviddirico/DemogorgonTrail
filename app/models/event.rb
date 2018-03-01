class Event < ApplicationRecord
  belongs_to :campaign
  has_many :npcs
  has_many :characters, :through => :npcs
  has_many :found_items
  has_many :items, :through => :found_items

  serialize :info
end
