class RenameEventTypeToName < ActiveRecord::Migration[5.1]
  def change
    rename_column :events, :type, :name
  end
end
