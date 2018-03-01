class Item < ApplicationRecord
  has_many :obtainables
  has_many :inventories, :through => :obtainables
  has_many :found_items
  has_many :events, :through => :found_items

  validates :name, presence: true
  validates :description, presence: true
  validates :item_type, presence: true

end
