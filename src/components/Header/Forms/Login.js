import React, { useState } from 'react'
import './forms.css'
import { InputHandler } from './InputHandler'
import { Link } from 'react-router-dom'
import { AuthenticateUser } from './FetchHandler'

const Login = (props) =>{
    const {value: email, bind:bindEmail, reset: resetEmail } = InputHandler('')
    const {value: password, bind:bindPassword, reset: resetPassword } = InputHandler('')
    const [postData,setPostData] = useState({})

    async const { result } = AuthenticateUser(postData)
    await console.log(result)

    const handleSubmit =(e) => {
        e.preventDefault()
        if(email === '' || password === ''){
            alert('Fields are required')
        }else{
            setPostData({
                email: email,
                password: password
            })
        }
    }
    return(
        <div className={`login-main${props.toggle}`}>
            <div className='login-modal-bg'> 
                <div className="login-header">
                    <div className="login-header-title"><h5>SIGN IN <span className="colored-text">using</span></h5> </div>
                   
                </div>
                <div className="login-body first">
                    <button className="fb">Facebook</button>
                    <button className="gmail">Google</button>
                </div>
                <div className="login-body mid">
                    <span className="login-mid-text"> - OR -</span>
                </div>
                <form className="login-body second" onSubmit={e => {handleSubmit(e)}}>
                    <div>
                        <input type="email" 
                        id="email" 
                        autoComplete="off"
                        {...bindEmail}
                        />
                        <label className="login-email-label"><span className="login-email-label-text">Email Address</span></label>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" 
                        {...bindPassword}/>
                    </div>
                    <div className="login-btns">
                        <div><button type="submit">SIGN IN</button></div>
                        <div className="login-modal-close"><button onClick={props.handleToggle}>cancel</button></div>
                    </div>
                    
                </form>
                
                <div className="login-footer">
                    <h6>No account? </h6><Link to="/signup" onClick={props.handleToggle} className="colored-text">Click Here.</Link>
                </div>
            </div>
        </div>
    )
}

export default Login