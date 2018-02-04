import React from 'react'
import Dropzone from 'react-dropzone'


const SignUpForm = props => {

  let placeholder
  let classNamePlaceholder
  if (props.preview) {
    placeholder = props.preview
    classNamePlaceholder = "dropzoneStyleAlt"
  } else {
    placeholder = <div>Drag Profile Image Here</div>
    classNamePlaceholder = "dropzoneStyle"
  }


  return(
    <div className="formWrapper">
      <div className="formBackDrop">
        <div>
          {props.success}
          {props.loading}
        </div>
        <form>
            <ul>
              {props.errors}
            </ul>
          <label className="inputField">
            <input className="field" type='text' onChange={props.handleUsernameChange} value={props.usernameContent} placeholder={'Desired Username'}/>
          </label>

          <label className="inputField">
            <input className="field" type='text' onChange={props.handleEmailChange} value={props.emailContent} placeholder={'Email Address'}/>
          </label>

          <label className="inputField">
            <input className="field" type='text' onChange={props.handlePasswordChange} value={props.passwordContent} placeholder={'Password'}/>
          </label>

          <label className="inputField">
            <input className="field" type='text' onChange={props.handlePasswordConfirmationChange} value={props.passwordConfirmationContent} placeholder={'Password Confirmation'}/>
          </label>

          <label className="photoDrop">
            <Dropzone className={classNamePlaceholder} onDrop={props.onDrop} value={props.imageValue}>
              {placeholder}
            </Dropzone>
          </label>
          <button className="field" type='submit' onClick={props.handleSubmit} value='Submit'>Submit</button>
        </form>
      </div>
    </div>

  )
}

export default SignUpForm
