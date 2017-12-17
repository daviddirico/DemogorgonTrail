import React from 'react'
import Dropzone from 'react-dropzone'


const TextField = props => {

  return(
    <div>
      <div>
        <div>
          {props.success}
          {props.loading}
        </div>
        <form>
            <ul>
              {props.errors}
            </ul>
          <label>
            <input type='text' onChange={props.handleUsernameChange} value={props.usernameContent} placeholder={'Desired Username'}/>
          </label>
          <label>
            <input type='text' onChange={props.handleEmailChange} value={props.emailContent} placeholder={'Email Address'}/>
          </label>
          <label>
            <input type='text' onChange={props.handlePasswordChange} value={props.passwordContent} placeholder={'Password'}/>
          </label>
          <label>
            <input type='text' onChange={props.handlePasswordConfirmationChange} value={props.passwordConfirmationContent} placeholder={'Password Confirmation'}/>
          </label>
          <label>
            <Dropzone onDrop={props.onDrop} value={props.imageValue}>
              Drag Image Here <br />
              {props.preview}
            </Dropzone>
          </label>
          <button type='submit' onClick={props.handleSubmit} value='Submit'>SUBMIT</button>
        </form>
      </div>
    </div>

  )
}

export default TextField
