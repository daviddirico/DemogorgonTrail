class NPC < ActiveRecord::Base
  belongs_to :character
  belongs_to :event
end
