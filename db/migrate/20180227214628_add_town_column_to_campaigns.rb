class AddTownColumnToCampaigns < ActiveRecord::Migration[5.1]
  def up
    add_column :campaigns, :town, :string
  end

  def down
    remove_column :campaigns, :town
  end
end
