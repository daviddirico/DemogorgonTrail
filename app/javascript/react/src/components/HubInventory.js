import React from 'react';
import InventoryTile from "./InventoryTile"

const HubInventory = props => {

  let character = props.character
  let inventory = props.inventory

  let itemsOwned =  <InventoryTile
                      inventory={inventory}
                      itemInteract={props.itemInteract}
                      detailClick={props.detailClick}
                      consumableClick={props.consumableClick}
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
        <div className="small-5 columns hubWrapper">
          <div className="hubFieldTop">
            <div className="hubMapText">Map of progress</div>
            <div className="campaignMapContainer">
              <img className="campaignMap" src={ require(`../../../../assets/images/maps/campaign-map`) }/>
            </div>
          </div>
        </div>
        <div className="small-7 columns hubWrapper">
          <div className="hubFieldTop">
            <div className="small-12 columns hubCharacter">
              <div className="characterName">
                <div>
                  {character.name}
                </div>
              </div>
              <div className="statsAndInventory">
                <div className="statsContainer">
                  <div className="statsTitle">Character Stats</div>
                  <div className="stats">
                    <div>
                      <div>
                        {race} {classification}
                      </div>
                    </div>
                    <div>
                      <div>
                        Level {character.level}
                      </div>
                    </div>
                    <div>
                      <div>
                        Exp - {character.experience}/{character.next_exp}
                      </div>
                    </div>
                    <div>
                      <div>
                        HP - {character.current_hitpoints}/{character.max_hitpoints}
                      </div>
                    </div>
                    <div>
                      <div>
                        Str - {character.current_strength}/{character.max_strength}
                      </div>
                    </div>
                    <div>
                      <div>
                        Def - {character.current_defense}/{character.max_defense}
                      </div>
                    </div>
                    <div>
                      <div>
                        Spd - {character.current_speed}/{character.max_speed}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inventoryContainer">
                  <div className="inventoryTitle">Inventory</div>
                  {itemsOwned}
                </div>
              </div>
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
