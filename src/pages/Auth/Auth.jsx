import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

export const Auth = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true)

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: "",
        username: ""
    })
    const [confirmPassword, setConfirmPassword] = useState(true)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpassword ? dispatch(signUp(data)) : setConfirmPassword(false);
        } else {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmPassword(true)
        setData({
            firstname: "",
            lastname: "",
            password: "",
            confirmpassword: "",
            username: ""
        })
    }
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Media</h1>
                    <h6>Explore the ideas</h6>
                </div>
            </div>

            <div className="a-right">
                <form className='infoForm authForm' onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

                    {isSignUp &&
                        <div>
                            <input type="text" placeholder='First Name'
                                className='infoInput' name='firstname'
                                onChange={handleChange}
                                value={data.firstname} />
                            <input type="text" placeholder='Last Name'
                                className='infoInput' name='lastname'
                                onChange={handleChange}
                                value={data.lastname} />
                        </div>
                    }

                    <div>
                        <input type="text" placeholder='User Name'
                            className='infoInput' name='username'
                            onChange={handleChange}
                            value={data.username} />
                    </div>
                    <div>
                        <input type="password" placeholder='Password'
                            className='infoInput' name='password'
                            onChange={handleChange}
                            value={data.password} />

                        {isSignUp &&
                            <input type="password" placeholder='Confirm Password'
                                className='infoInput' name='confirmpassword'
                                onChange={handleChange}
                                value={data.confirmpassword} />
                        }

                    </div>
                    <span style={{ display: confirmPassword ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
                        * Confirm Password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: "12px", cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>
                            {isSignUp ? "Already have account? LOGIN!" : "Don't have account? SignUp!"}
                        </span>
                    </div>
                    <button type='submit' className='button infoButton'>{loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}</button>
                </form>
            </div>

        </div>
    )
}