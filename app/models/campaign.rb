class Campaign < ApplicationRecord
  belongs_to :user
  has_many :characters
  has_many :events

  validates :completion, presence: true
  validates :difficulty, presence: true
end
