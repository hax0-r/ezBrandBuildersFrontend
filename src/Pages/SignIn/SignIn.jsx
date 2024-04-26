import React from 'react'
import './SignIn.scss'


export default function SignIn() {
  return (
    <>
      <div className="signIn">
        <div className="box">
          <h1>Crypto trading with bots and smart seals</h1>
          <div className="right">
            <div className="main">
              <h1>Sign in </h1>
              <div className="inputs">
                <input type="email" placeholder='login or email' />
                <input type="email" placeholder='Password' />
              </div>
              <button>Sign in </button>
              <p>Still not have account?</p>
              <button id='createAccountBtn'>Create an account
                <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L30.3333 5M30.3333 5L26.3333 0.999999M30.3333 5L26.3333 9" stroke="#B689FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
