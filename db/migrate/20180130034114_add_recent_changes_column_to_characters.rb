class AddRecentChangesColumnToCharacters < ActiveRecord::Migration[5.1]
  def up
    add_column :characters, :recent_changes, :text
  end

  def down
    remove_column :characters, :recent_changes
  end
end
