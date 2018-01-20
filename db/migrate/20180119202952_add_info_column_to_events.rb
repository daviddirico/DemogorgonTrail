class AddInfoColumnToEvents < ActiveRecord::Migration[5.1]
  def up
    add_column :events, :info, :text
  end
  
  def down
    remove_column :events, :info
  end
end
