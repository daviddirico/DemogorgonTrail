class AddFindableColumnToItems < ActiveRecord::Migration[5.1]
  def up
    add_column :items, :findable, :boolean, default: false
  end

  def down
    remove_column :items, :findable
  end
end
