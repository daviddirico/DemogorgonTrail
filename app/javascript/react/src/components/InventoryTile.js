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
                <button onClick={props.itemInteract} name="use" value={item}>Use</button>
                <button onClick={props.itemInteract} name="drop" value={item}>Drop</button>
              </div>
    })
  } else {
    itemDisplay = <div>Empty</div>
  }

  return(
    <div>
      <div>Weapon - {weaponDisplay}</div>
      <div>Armor - {armorDisplay}</div>
      <div>Quest Item - {questDisplay}</div>
      <div>Backpack:</div>
      {itemDisplay}
    </div>
  )
}

export default InventoryTile;
