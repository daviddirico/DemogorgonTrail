class CreateNpcs < ActiveRecord::Migration[5.1]
  def change
    create_table :npcs do |t|
      t.belongs_to :characters, index: true
      t.belongs_to :events, index: true

      t.timestamps null: false
    end
  end
end
