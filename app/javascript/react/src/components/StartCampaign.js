import React from 'react'

const StartCampaign = props => {

  return(
    <div>
      <div className="campaignStartImage">
        <img src={ require('../../../../assets/images/backgrounds/evil-trail') }/>
      </div>
      <div className="startCampaignWrapper">
        <button onClick={props.handleCampaignSubmit}>Start your Adventure</button>
      </div>
    </div>
  )
}

export default StartCampaign
