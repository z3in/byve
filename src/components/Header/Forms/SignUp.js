import React from 'react'
import { InputHandler } from './InputHandler'


const SignUp = () =>{
    const {value: name, bind:bindName, reset: resetName } = InputHandler('')
    const {value: password, bind:bindPassword, reset: resetPassword } = InputHandler('')
    const {value: email, bind:bindEmail, reset: resetEmail } = InputHandler('')
    const {value: confirmPassword, bind:bindConfirmPassword, reset: resetConfirmPassword } = InputHandler('')
    return(
            <div className="container signup-align">
                <div className="signup-bg">
                    <div className="signup-div">
                        <label>Full Name</label>
                        <input type="text"
                        value={name} 
                        {...bindName}
                        />
                    </div>
                    <div className="signup-div">
                        <label>Email Address</label>
                        <input type="text"
                        value={email} 
                        {...bindEmail}
                        />
                    </div>
                    <div className="signup-div">
                        <label>Password</label>
                        <input type="text"
                        value={password} 
                        {...bindPassword}
                        />
                    </div>
                    <div className="signup-div">
                        <label>Confirm Password</label>
                        <input type="text"
                        value={confirmPassword} 
                        {...bindConfirmPassword}
                        />
                    </div>
                    <div className="signup-btn-container">
                        <button>Sign up</button>
                    </div>
                </div> 
            </div>
    )
}

export default SignUp