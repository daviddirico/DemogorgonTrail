class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.belongs_to :user, null: false
      t.integer :completion, null: false
      t.string :difficulty, null: false

      t.timestamps null: false
    end
  end
end
