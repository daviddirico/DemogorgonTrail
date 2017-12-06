class CreateInventory < ActiveRecord::Migration[5.1]
  def change
    create_table :inventories do |t|
      t.belongs_to :character, null: false
      t.string :slot_1
      t.string :slot_2
      t.string :slot_3
      t.string :slot_4
      t.string :slot_5
      t.string :weapon
      t.string :armor

      t.timestamps null: false
    end
  end
end
