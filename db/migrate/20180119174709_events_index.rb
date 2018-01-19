class EventsIndex < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :type, null: false
      t.boolean :invoked, default: false

      t.timestamps null: false
  end
end
