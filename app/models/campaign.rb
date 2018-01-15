class Campaign < ApplicationRecord
  belongs_to :user
  has_one :character

  validates :completion, presence: true
  validates :difficulty, presence: true
end
