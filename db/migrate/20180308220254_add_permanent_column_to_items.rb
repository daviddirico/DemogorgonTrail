class AddPermanentColumnToItems < ActiveRecord::Migration[5.1]
  def up
    add_column :items, :permanent, :boolean
  end

  def down
    remove_column :items, :permanent
  end
end
