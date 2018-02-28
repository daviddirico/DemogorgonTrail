class Obtainable < ApplicationRecord
  belongs_to :item
  belongs_to :inventory
end
