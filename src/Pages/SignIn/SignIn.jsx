import React, { useState } from 'react'
import './SignIn.scss'
import { errorNotify, successNotify } from '../../Components/Toastify/Toastify';
import { Link } from 'react-router-dom';
import { NAV_DATA } from '../../Components/Navbar/NAV_DATA';


export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const { email, password } = formData

    if (!email) {
      errorNotify("E-mail feild is missing")
    } else if (!password) {
      errorNotify("Password feild is missing")
    } else if (password.length < 6) {
      errorNotify("Password must be at least 6 characters")
    } else {
      setFormData({ email: "", password: "" });
      successNotify(`welcome, ${email}`)
    }
  }

  return (
    <>
      <div className="signIn">
        <div className="box">
          <h1>Crypto trading with bots and smart seals</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="right">
              <div className="main">
                <h1>Sign in </h1>
                <div className="inputs">
                  <input type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })}  placeholder='login or email' value={formData.email} />
                  <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}  placeholder='Password' />
                </div>
                <button>Sign in </button>
                <p>Still not have account?</p>
                <Link to={NAV_DATA[4].navPath}>
                  <button id='createAccountBtn'>Create an account
                    <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L30.3333 5M30.3333 5L26.3333 0.999999M30.3333 5L26.3333 9" stroke="#B689FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
