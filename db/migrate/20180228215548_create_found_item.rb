class CreateFoundItem < ActiveRecord::Migration[5.1]
  def change
    create_table :found_items do |t|
      t.belongs_to :items, index: true
      t.belongs_to :events, index: true

      t.timestamps null: false
    end
  end
end
