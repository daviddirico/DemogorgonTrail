class AddExperienceToCharacters < ActiveRecord::Migration[5.1]
  def up
    add_column :characters, :experience, :integer, default: 0
  end

  def down
    remove_column :characters, :experience
  end
end
