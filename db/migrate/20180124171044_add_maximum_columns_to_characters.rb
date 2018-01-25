class AddMaximumColumnsToCharacters < ActiveRecord::Migration[5.1]
  def up
    add_column :characters, :max_strength, :integer
    add_column :characters, :max_defense, :integer
    add_column :characters, :max_hitpoints, :integer
  end

  def down
    remove_column :characters, :max_strength
    remove_column :characters, :max_defense
    remove_column :characters, :max_hitpoints
  end
end
