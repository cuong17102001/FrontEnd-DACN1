import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

export const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>Media</h1>
                <h6>Explore the ideas</h6>
            </div>
        </div>
        <Login/>
    </div>
  )
}

function Login(){
    return(
        <div className="a-right">
            <form className='infoForm authForm' action="">
                <h3>Login</h3>
                <div>
                    <input type="text" placeholder='User Name' 
                    className='infoInput' name='username'/>
                </div>
                <div>
                    <input type="text" placeholder='Password' 
                    className='infoInput' name='password'/>
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Don't have account? SignUp</span>
                </div>
                <button type='submit' className='button infoButton'>Login</button>
            </form>
        </div>
    )
}

function SignUp(){
    return(
        <div className="a-right">
            <form className='infoForm authForm' action="">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' 
                    className='infoInput' name='firstname'/>
                    <input type="text" placeholder='Last Name' 
                    className='infoInput' name='lastname'/>
                </div>
                <div>
                    <input type="text" placeholder='User Name' 
                    className='infoInput' name='username'/>
                </div>
                <div>
                    <input type="text" placeholder='Password' 
                    className='infoInput' name='password'/>
                    <input type="text" placeholder='Confirm Password' 
                    className='infoInput' name='confirmpassword'/>
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Already have account? LOGIN</span>
                </div>
                <button type='submit' className='button infoButton'>Sign Up</button>
            </form>
        </div>
    )
}
