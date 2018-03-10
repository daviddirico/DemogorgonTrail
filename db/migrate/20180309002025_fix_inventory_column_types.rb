class FixInventoryColumnTypes < ActiveRecord::Migration[5.1]
  def up
    remove_column :inventories, :weapon
    add_column :inventories, :weapon, :text
    remove_column :inventories, :armor
    add_column :inventories, :armor, :text
    remove_column :inventories, :slot_1
    add_column :inventories, :slot_1, :text
    remove_column :inventories, :slot_2
    remove_column :inventories, :slot_3
    remove_column :inventories, :slot_4
    remove_column :inventories, :slot_5
  end

  def down
    remove_column :inventories, :weapon
    add_column :inventories, :weapon, :string
    remove_column :inventories, :armor
    add_column :inventories, :armor, :string
    remove_column :inventories, :slot_1
    add_column :inventories, :slot_1, :string
    add_column :inventories, :slot_2, :string
    add_column :inventories, :slot_3, :string
    add_column :inventories, :slot_4, :string
    add_column :inventories, :slot_5, :string
  end
end
