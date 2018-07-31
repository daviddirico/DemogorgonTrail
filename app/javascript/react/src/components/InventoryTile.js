import React from 'react';
import PrimaryItem from "./PrimaryItem"


const InventoryTile = props => {

  let inventory = props.inventory
  let weapon
  let armor
  let quest
  let itemDisplay

  if (inventory.weapon[0]) {
    weapon = inventory.weapon[0]
  } else {
    weapon = "None"
  }

  if (inventory.armor[0]) {
    armor = inventory.armor[0]
  } else {
    armor = "None"
  }

  if (inventory.slot_1[0]) {
    quest = inventory.slot_1[0]
  } else {
    quest = "None"
  }

  if (inventory.collection.length >= 1) {
    itemDisplay = inventory.collection.map((item, index) => {
      return  <div key={index}>
                <div className="backpackItem" onClick={props.consumableClick} value={item}>{item}</div>
                <div className="backpackItem rightLine">
                  <button className="itemInteractButton" onClick={props.itemInteract} name="use" value={item}>
                    <div className="itemInteractText">
                      Use
                    </div>
                  </button>
                  <button className="itemInteractButton" onClick={props.itemInteract} name="drop" value={item}>
                    <div className="itemInteractText">
                      Drop
                    </div>
                  </button>
                </div>
              </div>
    })
  } else {
    itemDisplay = <div className="emptyText">Empty</div>
  }

  let itemList = []
  itemList.push(weapon)
  itemList.push(armor)
  itemList.push(quest)
  let primaryItems

  primaryItems = itemList.map((item, index) => {
    return  <PrimaryItem
              key={index}
              order={index}
              item={item}
              detailClick={props.detailClick}
            />
  })

  return(
    <div className="inventory">
      <div>
        <div>
          {primaryItems}
        </div>
      </div>
      <div>
        <div>
          <div className="backpackText">Backpack:</div>
          {itemDisplay}
        </div>
      </div>
    </div>
  )
}

export default InventoryTile;
