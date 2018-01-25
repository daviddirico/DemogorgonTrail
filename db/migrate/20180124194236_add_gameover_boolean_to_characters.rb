class AddGameoverBooleanToCharacters < ActiveRecord::Migration[5.1]
  def up
    add_column :characters, :gameover, :boolean, default: false
  end

  def down
    remove_column :characters, :gameover
  end
end
