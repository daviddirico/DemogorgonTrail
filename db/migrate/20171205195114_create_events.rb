class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.belongs_to :campaign, null: false
      t.string :type, null: false

      t.timestamps null: false
    end
  end
end
