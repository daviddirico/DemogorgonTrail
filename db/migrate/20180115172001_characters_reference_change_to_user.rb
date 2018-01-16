class CharactersReferenceChangeToUser < ActiveRecord::Migration[5.1]
  def up
    remove_column :characters, :campaign_id
    add_reference :characters, :user
  end

  def down
    remove_column :characters, :user_id
    add_reference :characters, :campaign
  end
end
