import React from 'react'

const SignInForm = props => {

  return(
    <div>
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
            <input className="field" type='text' onChange={props.handleEmailChange} value={props.emailContent} placeholder={'Email Address'}/>
          </label>

          <label className="inputField">
            <input className="field" type='text' onChange={props.handlePasswordChange} value={props.passwordContent} placeholder={'Password'}/>
          </label>

          <button className="field" type='submit' onClick={props.handleSubmit} value='Submit'>Submit</button>
        </form>
      </div>
    </div>

  )
}

export default SignInForm
