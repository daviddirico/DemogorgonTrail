import React, { Component } from 'react'

class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      race: "",
      class: "",
      classNameHuman: "raceClassSelect",
      classNameElf: "raceClassSelect",
      classNameDwarf: "raceClassSelect",
      classNameWarrior: "raceClassSelect",
      classNameRanger: "raceClassSelect",
      classNameWizard: "raceClassSelect"
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleHumanClick = this.handleHumanClick.bind(this)
    this.handleElfClick = this.handleElfClick.bind(this)
    this.handleDwarfClick = this.handleDwarfClick.bind(this)
    this.handleWarriorClick = this.handleWarriorClick.bind(this)
    this.handleRangerClick = this.handleRangerClick.bind(this)
    this.handleWizardClick = this.handleWizardClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleHumanClick(event) {
    if(this.state.classNameHuman == "raceClassSelect") {
      this.setState({ classNameHuman: "raceClassSelect selected" })
      this.setState({ classNameElf: "raceClassSelect" })
      this.setState({ classNameDwarf: "raceClassSelect" })
      this.setState({ race: "human" })
    } else {
      this.setState({ classNameHuman: "raceClassSelect" })
      this.setState({ race: "" })
    }
  }

  handleElfClick(event) {
    if(this.state.classNameElf == "raceClassSelect") {
      this.setState({ classNameHuman: "raceClassSelect" })
      this.setState({ classNameElf: "raceClassSelect selected" })
      this.setState({ classNameDwarf: "raceClassSelect" })
      this.setState({ race: "elf" })
    } else {
      this.setState({ classNameElf: "raceClassSelect" })
      this.setState({ race: "" })
    }
  }

  handleDwarfClick(event) {
    if(this.state.classNameDwarf == "raceClassSelect") {
      this.setState({ classNameHuman: "raceClassSelect" })
      this.setState({ classNameElf: "raceClassSelect" })
      this.setState({ classNameDwarf: "raceClassSelect selected" })
      this.setState({ race: "dwarf" })
    } else {
      this.setState({ classNameDwarf: "raceClassSelect" })
      this.setState({ race: "" })
    }
  }

  handleWarriorClick(event) {
    if(this.state.classNameWarrior == "raceClassSelect") {
      this.setState({ classNameWarrior: "raceClassSelect selected" })
      this.setState({ classNameRanger: "raceClassSelect" })
      this.setState({ classNameWizard: "raceClassSelect" })
      this.setState({ class: "warrior" })
    } else {
      this.setState({ classNameWarrior: "raceClassSelect" })
      this.setState({ class: "" })
    }
  }

  handleRangerClick(event) {
    if(this.state.classNameRanger == "raceClassSelect") {
      this.setState({ classNameWarrior: "raceClassSelect" })
      this.setState({ classNameRanger: "raceClassSelect selected" })
      this.setState({ classNameWizard: "raceClassSelect" })
      this.setState({ class: "ranger" })
    } else {
      this.setState({ classNameRanger: "raceClassSelect" })
      this.setState({ class: "" })
    }
  }

  handleWizardClick(event) {
    if(this.state.classNameWizard == "raceClassSelect") {
      this.setState({ classNameWarrior: "raceClassSelect" })
      this.setState({ classNameRanger: "raceClassSelect" })
      this.setState({ classNameWizard: "raceClassSelect selected" })
      this.setState({ class: "wizard" })
    } else {
      this.setState({ classNameWizard: "raceClassSelect" })
      this.setState({ class: "" })
    }
  }

  handleSubmit() {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('name', this.state.name)
    formPayload.append('race', this.state.race)
    formPayload.append('class', this.state.class)
    this.props.handleCharacterSubmit(formPayload)
  }

  render() {

    return(
      <div>
        <p>Create your character</p>
        <div className="formBackDrop">
          <form>
            <label className="inputField">
              <input className="field" type='text' onChange={this.handleNameChange} placeholder={'Character Name'}/>
            </label>

            <p className="raceClassTitle">Select Race</p>
            <ul className="raceClassList">
              <div className={this.state.classNameHuman} onClick={this.handleHumanClick}>Human</div>
              <div className={this.state.classNameElf} onClick={this.handleElfClick}>Elf</div>
              <div className={this.state.classNameDwarf} onClick={this.handleDwarfClick}>Dwarf</div>
            </ul>

            <p className="raceClassTitle">Select Class</p>
            <ul className="raceClassList">
              <div className={this.state.classNameWarrior} onClick={this.handleWarriorClick}>Warrior</div>
              <div className={this.state.classNameRanger} onClick={this.handleRangerClick}>Ranger</div>
              <div className={this.state.classNameWizard} onClick={this.handleWizardClick}>Wizard</div>
            </ul>

            <button className="field" type='submit' onClick={this.handleSubmit} value='Submit'>Submit Character</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterForm
