class ChangeStatsToHavePrefixCurrent < ActiveRecord::Migration[5.1]
  def change
    rename_column :characters, :hitpoints, :current_hitpoints
    rename_column :characters, :strength, :current_strength
    rename_column :characters, :defense, :current_defense
  end
end
