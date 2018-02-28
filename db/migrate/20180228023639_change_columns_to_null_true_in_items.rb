class ChangeColumnsToNullTrueInItems < ActiveRecord::Migration[5.1]
  def up
    add_column :items, :rare, :boolean, :null => true
    add_column :items, :droppable, :boolean, :null => true
    add_column :items, :battle_affecting, :boolean, :null => true
  end

  def down
    remove_column :items, :rare
    remove_column :items, :droppable, :boolean
    remove_column :items, :battle_affecting, :boolean
  end
end
