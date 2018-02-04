class AddExpToNextColumnToCharacters < ActiveRecord::Migration[5.1]
  def up
    add_column :characters, :next_exp, :integer, default: 10
  end

  def down
    remove_column :characters, :next_exp
  end
end
