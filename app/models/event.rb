class Event < ApplicationRecord
  belongs_to :campaign

  validates :type, presence: true
end
