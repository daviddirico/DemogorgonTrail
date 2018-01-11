class CharactersTableDeleteUserColumn < ActiveRecord::Migration[5.1]
  def up
    remove_column :characters, :user_id
  end

  def down
    add_column :characters, :user_id, :integer
  end
end
