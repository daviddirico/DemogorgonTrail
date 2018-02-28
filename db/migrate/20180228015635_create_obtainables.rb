class CreateObtainables < ActiveRecord::Migration[5.1]
  def change
    create_table :obtainables do |t|
      t.belongs_to :inventories, index: true
      t.belongs_to :items, index: true

      t.timestamps null: false
    end
  end
end
