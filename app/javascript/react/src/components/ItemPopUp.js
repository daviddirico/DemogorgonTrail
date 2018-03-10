import React from 'react';

const ItemPopUp = props => {

  let item = props.item
  
  return(
    <div className='popUp'>
      <div className='popUp_inner'>
        <div>{item.name}</div>
        <img className="itemImage" src={ require(`../../../../assets/images/items/${item.name}`) }/>
        <div>{item.description}</div>
      <button onClick={props.closePopUp}>close</button>
      </div>
    </div>
  )
}

export default ItemPopUp;
