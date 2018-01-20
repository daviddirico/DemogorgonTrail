class EventAddReferenceToCampaign < ActiveRecord::Migration[5.1]
  def up
    add_reference :events, :campaign
  end

  def down
    remove_column :events, :campaign_id
  end
end
