import React from 'react';
import InventoryTile from "./InventoryTile"

const HubInventory = props => {

  let character = props.character
  let inventory = props.inventory

  let itemsOwned =  <InventoryTile
                    inventory={inventory}
                    itemInteract={props.itemInteract}
                  />

  let buttonText
  if (props.campaign.completion === 0) {
    buttonText = <div>Begin Quest</div>
  } else {
    buttonText = <div>Continue Quest</div>
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let race = capitalizeFirstLetter(character.race)
  let classification = capitalizeFirstLetter(character.classification)


  return(
    <div>
      <div className="hubTop">
        <div className="small-6 columns hubWrapper">
          <div className="hubFieldTop">
            <div className="hubMapText">Map of progress</div>
            <img className="campaignMap" src={ require(`../../../../assets/images/maps/campaign-map`) }/>
          </div>
        </div>
        <div className="small-6 columns hubWrapper">
          <div className="hubFieldTop">
            <div className="small-6 columns hubCharacter">
              <div className="small-12 columns inventoryTextWrapper">
                <div className="small-6 columns inventoryText">
                  {character.name}
                </div>
                <div className="small-6 columns inventoryText">
                  Level {character.level}
                </div>
              </div>
              <div className="small-12 columns inventoryTextWrapper">
                <div className="small-6 columns inventoryText">
                  {race}
                </div>
                <div className=" small-6 columns inventoryText">
                  {classification}
                </div>
              </div>
              <div className="small-12 columns inventoryTextWrapper">
                <div className="small-6 columns inventoryText">
                  Hitpoints
                </div>
                <div className="small-6 columns inventoryText">
                  {character.current_hitpoints}/{character.max_hitpoints}
                </div>
              </div>
              <div className="small-12 columns inventoryTextWrapper">
                <div className="small-6 columns inventoryText">
                  Strength
                </div>
                <div className="small-6 columns inventoryText">
                  {character.current_strength}/{character.max_strength}
                </div>
              </div>
              <div className="small-12 columns inventoryTextWrapper">
                <div className="small-6 columns inventoryText">
                  Defense
                </div>
                <div className="small-6 columns inventoryText">
                  {character.current_defense}/{character.max_defense}
                </div>
              </div>
              <div className="small-12 columns inventoryTextWrapper">
                <div className="small-6 columns inventoryText">
                  Speed
                </div>
                <div className="small-6 columns inventoryText">
                  {character.current_speed}/{character.max_speed}
                </div>
              </div>
              <div className="small-12 columns inventoryTextWrapper">
                <div className="small-6 columns inventoryText">
                  Exp/Next
                </div>
                <div className="small-6 columns inventoryText">
                  {character.experience}/{character.next_exp}
                </div>
              </div>
            </div>
            <div className="small-6 columns hubInventory">
              <div className="small-12 columns inventoryTextWrapper">
                <div className="inventoryText">
                  Inventory
                </div>
              </div>
              {itemsOwned}
            </div>
          </div>
        </div>
      </div>
      <div className="hubBottom">
        <div className="small-8 columns hubWrapper">
          <div className="hubFieldBottom">
            <div className="hubQuestHeader">Quest Log</div>
            <div className="hubQuestLog">
              <li>Find Folbarg and investigate the disappearances in town</li>
              <li>Prove that you are strong enough to handle the challenges of this adventure</li>
            </div>
          </div>
        </div>
        <div className="small-4 columns hubWrapper">
          <div className="hubFieldBottom">
            <button className="continueQuestButton" onClick={props.handleButtonClick}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HubInventory;
