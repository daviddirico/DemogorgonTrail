class FoundItem < ActiveRecord::Base
  belongs_to :item
  belongs_to :event
end
