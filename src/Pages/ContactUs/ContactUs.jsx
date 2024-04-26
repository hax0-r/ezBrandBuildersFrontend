import React, { useState } from 'react'
import './ContactUs.scss'
import { errorNotify, successNotify } from '../../Components/Toastify/Toastify';
import axios from 'axios';
import { BASE_URL } from '../../Global';

export default function ContactUs() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const formHandler = (obj) => {
   axios.post(`${BASE_URL}/users`,obj)
   .then((res)=>{
    console.log(res);
   })
   .catch((err)=>{
    console.log(err);
   })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      errorNotify("Name field is missing");
      return;
    } else if (!phone) {
      errorNotify("Phone field is missing");
      return;
    } else if (!email) {
      errorNotify("Email field is missing");
      return;
    } else if (!message) {
      errorNotify("Message field is missing");
      return;
    }

    let obj = {
      name, email, message, phone
    }

    formHandler(obj)



    successNotify("submitted")
    setName("")
    setEmail("")
    setMessage("")
    setPhone("")
  }

  return (
    <>
      <div className="contactUs">
        <div className="box">
          <h1>Fill Out The Form & We’ll be in Touch Shortly</h1>
          <div className="right">
            <form onSubmit={formSubmitHandler}>
              <div className="main">
                <h1>Contact us</h1>
                <div className="inputs">
                  <input type="name" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                  <input type="name" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  <input type="number" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} value={phone} />
                  <textarea name="" id="" cols="30" rows="3" placeholder='Message' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                </div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
