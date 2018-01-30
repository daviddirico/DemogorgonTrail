class AddSpeedColumnToCharacters < ActiveRecord::Migration[5.1]
  def up
    add_column :characters, :current_speed, :integer
    add_column :characters, :max_speed, :integer
  end

  def down
    remove_column :characters, :current_speed
    remove_column :characters, :max_speed
  end
end
