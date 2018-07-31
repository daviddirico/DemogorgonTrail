import React from 'react';

const PrimaryItem = props => {

  let item = props.item

  let followingText
  let clicker
  let itemValue
  if (item === "None") {
    followingText = item.name
    clicker = null
    itemValue = null
  } else {
    followingText = item.name
    clicker = props.detailClick
    itemValue = item.id
  }

  let initialText
  if (props.order === 0) {
    initialText = "Weapon -"
  } else if (props.order === 1) {
    initialText = "Armor -"
  } else if (props.order === 2) {
    initialText = "Quest Item -"
  }

  return(
    <div>
      <div className="precedingText">{initialText}&nbsp;</div>
      <div className="backpackItem" onClick={clicker} value={itemValue}>{followingText}</div>
    </div>
  )
}

export default PrimaryItem;
