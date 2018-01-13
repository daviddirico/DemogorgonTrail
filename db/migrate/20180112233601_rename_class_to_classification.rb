class RenameClassToClassification < ActiveRecord::Migration[5.1]
  def change
    rename_column :characters, :class, :classification
  end
end
