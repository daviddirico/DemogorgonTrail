class AddCollectionColumnToInventory < ActiveRecord::Migration[5.1]
  def up
    add_column :inventories, :collection, :text
  end

  def down
    remove_column :inventories, :collection
  end
end
