class CreateTowns < ActiveRecord::Migration[5.1]
  def change
    create_table :towns do |t|
      t.string :name, null: false
      t.string :leader
      t.integer :definition, null: false
      t.text :narrative, null: false
      t.text :objective, null: false
      t.string :town_need, null: false
      t.string :item_name
      t.integer :level_threshold
      t.string :enemy_requested

      t.timestamps null: false
    end
  end
end
