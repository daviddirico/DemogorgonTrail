class AddRarityColumnToEvents < ActiveRecord::Migration[5.1]
  def up
    add_column :events, :rare, :boolean
  end

  def down
    remove_column :events, :rare
  end
end
