import React from 'react';

const InventoryTile = props => {

  let inventory = props.inventory
  let weaponDisplay
  let armorDisplay
  let questDisplay
  let itemDisplay

  if (inventory.weapon) {
    weaponDisplay = inventory.weapon.name
  } else {
    weaponDisplay = "None"
  }

  if (inventory.armor) {
    armorDisplay = inventory.armor.name
  } else {
    armorDisplay = "None"
  }

  if (inventory.slot_1) {
    questDisplay = inventory.slot_1.name
  } else {
    questDisplay = "None"
  }

  if (inventory.collection.length >= 1) {
    itemDisplay = inventory.collection.map((item, index) => {
      return  <div key={index}>
                {item}
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
    })
  } else {
    itemDisplay = <div>Empty</div>
  }

  return(
    <div>
      <div className="small-12 columns inventoryTextWrapper">
        <div className="inventoryText">
          <div>Weapon - {weaponDisplay}</div>
          <div>Armor - {armorDisplay}</div>
          <div>Quest Item - {questDisplay}</div>
        </div>
      </div>
      <div className="small-12 columns inventoryTextWrapper">
        <div className="inventoryText">
          <div className="backpackText">Backpack:</div>
          {itemDisplay}
        </div>
      </div>
    </div>
  )
}

export default InventoryTile;
