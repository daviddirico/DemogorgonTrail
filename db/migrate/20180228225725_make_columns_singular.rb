class MakeColumnsSingular < ActiveRecord::Migration[5.1]
  def up
    remove_reference :npcs, :events, index: true
    remove_reference :npcs, :characters, index: true
    add_reference :npcs, :event, index: true
    add_reference :npcs, :character, index: true

    remove_reference :obtainables, :inventories, index: true
    remove_reference :obtainables, :items, index: true
    add_reference :obtainables, :inventory, index: true
    add_reference :obtainables, :item, index: true

    remove_reference :found_items, :events, index: true
    remove_reference :found_items, :items, index: true
    add_reference :found_items, :event, index: true
    add_reference :found_items, :item, index: true

  end

  def down
    add_reference :npcs, :events, index: true
    add_reference :npcs, :characters, index: true
    remove_reference :npcs, :event, index: true
    remove_reference :npcs, :character, index: true

    add_reference :obtainables, :inventories, index: true
    add_reference :obtainables, :items, index: true
    remove_reference :obtainables, :inventory, index: true
    remove_reference :obtainables, :item, index: true

    add_reference :found_items, :events, index: true
    add_reference :found_items, :items, index: true
    remove_reference :found_items, :event, index: true
    remove_reference :found_items, :item, index: true


  end
end
