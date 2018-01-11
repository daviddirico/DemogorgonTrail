class Campaign < ApplicationRecord
  belongs_to :user
  has_one :character
  has_many :events

  validates :completion, presence: true
  validates :difficulty, presence: true
end
