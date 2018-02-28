class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :type, null: false
      t.boolean :rare, null: false
      t.boolean :droppable, null: false
      t.boolean :battle_affecting, null: false
      t.string :mod_type
      t.integer :mod_value

      t.timestamps null: false
    end
  end
end
