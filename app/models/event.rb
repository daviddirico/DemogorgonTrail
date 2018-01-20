class Event < ApplicationRecord
  belongs_to :campaign
  has_many :npcs
  has_many :characters, :through => :npcs

  serialize :info
end
