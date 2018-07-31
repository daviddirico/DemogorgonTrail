class Campaign < ApplicationRecord
  belongs_to :user
  has_one :event

  validates :completion, presence: true
  validates :difficulty, presence: true

  serialize :town
end
