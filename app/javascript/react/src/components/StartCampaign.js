import React from 'react'

const StartCampaign = props => {

  return(
    <div className="startCampaignWrapper">
      <div className="campaignStartImage">
        <img src={ require('../../../../assets/images/backgrounds/evil-trail') }/>
      </div>
      <br/>
      <button onClick={props.handleCampaignSubmit}>Start your Campaign</button>
    </div>
  )
}

export default StartCampaign
