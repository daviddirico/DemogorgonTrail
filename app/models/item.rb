class Item < ApplicationRecord
  has_many :obtainables
  has_many :inventories, :through => :obtainables

  validates :name, presence: true
  validates :description, presence: true
  validates :item_type, presence: true

end
