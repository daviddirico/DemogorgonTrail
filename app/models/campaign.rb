class Campaign < ApplicationRecord
  belongs_to :user
  has_one :event
  has_one :character

  validates :completion, presence: true
  validates :difficulty, presence: true
end
