class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.belongs_to :campaign, null: false
      t.string :name, null: false
      t.boolean :hero, null: false
      t.string :race, null: false
      t.string :class, null: false
      t.integer :level, null: false
      t.integer :strength, null: false
      t.integer :defense, null: false
      t.integer :hitpoints, null: false

      t.timestamps null: false
    end
  end
end
