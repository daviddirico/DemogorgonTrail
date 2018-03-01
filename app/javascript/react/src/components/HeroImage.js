import React from 'react';

const HeroImage = props => {

  let heroDisplay
  if(props.race !== "" && props.classification !== "") {
    heroDisplay = <img src={ require(`../../../../assets/images/heroes/${props.race}-${props.classification}`) }/>
  } else {
    heroDisplay = <div className="heroImageNotRendered">Please select both a race and a class.</div>
  }

  let imageClassName
  if (props.classification !== "" && props.race === "human") {
    imageClassName = "heroImage human"
  } else if (props.classification !== "" && props.race === "elf") {
    imageClassName = "heroImage elf"
  } else if (props.classification !== "" && props.race === "dwarf") {
    imageClassName = "heroImage dwarf"
  }

  return(
    <div className="characterFormBackDrop">
      <div className={imageClassName}>
        {heroDisplay}
      </div>
    </div>
  )
}

export default HeroImage;
