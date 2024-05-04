import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import "./CreateAccount.scss"
import { errorNotify, successNotify } from '../../Components/Toastify/Toastify';

const CreateAccount = () => {

    const [formDataRegistration, setFormDataRegistration] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmedPassword: "",
        gender: ""
    });

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const { firstName, lastName, email, phoneNumber, password, confirmedPassword } = formDataRegistration;

        if (!firstName || !lastName) {
            errorNotify("Name Feild is Missing")
        } else if (!email) {
            errorNotify("E-mail Feild is Missing")
        } else if (!phoneNumber) {
            errorNotify("Number Feild is Missing")
        } else if (!password) {
            errorNotify("Password Feild is Missing")
        } else if (!confirmedPassword) {
            errorNotify("Password Feild is Missing")
        } else if (formDataRegistration.password !== formDataRegistration.confirmedPassword) {
            errorNotify("Password Not Match")
        } else if (!formDataRegistration.gender) {
            errorNotify("Please select a gender");
        } else {
            successNotify("Register");
        }

        setFormDataRegistration({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmedPassword: "",
            gender: ""
        })

    }

    const handleGenderChange = (e) => {
        setFormDataRegistration({ ...formDataRegistration, gender: e.target.value });
    };

    return (
        <>
            <div className="createAccount bg-black py-[5vw] px-[3vw] min-h-screen">
                <form onSubmit={formSubmitHandler} className='flex justify-center items-center'>
                    <div className="createAccount__container p-[2rem] bg-[#000000] max-w-[1120px] size-full flex flex-col rounded-[16px] justify-center items-center  text-white backdrop-blur-[5px]">
                        <h1 className='text-4xl size-full max-w-[62rem] py-5 t'>Create Account</h1>
                        <div className="registrationInputs flex flex-col justify-center items-center w-full">
                            <div className='firstRowRegistration gap-5 flex flex-wrap'>
                                <div className="firstName flex flex-col">
                                    <label htmlFor="">First Name</label>
                                    <Input value={formDataRegistration.firstName} name="firstName" onChange={(e) => setFormDataRegistration({ ...formDataRegistration, firstName: e.target.value })} type="text" placeholder="Enter First Name" />
                                </div>
                                <div className="lastName flex flex-col">
                                    <label htmlFor="">Last Name</label>
                                    <Input value={formDataRegistration.lastName} name="lastName" onChange={(e) => setFormDataRegistration({ ...formDataRegistration, lastName: e.target.value })} type="text" placeholder="Enter Last Name" />
                                </div>
                            </div>
                            <div className='secondRowRegistration gap-5 flex flex-wrap'>
                                <div className="registrationEmail flex flex-col">
                                    <label htmlFor="">E-Mail</label>
                                    <Input value={formDataRegistration.email} name="email" onChange={(e) => setFormDataRegistration({ ...formDataRegistration, email: e.target.value })} type="email" placeholder="Enter Your Email" />
                                </div>
                                <div className="registrationNumber flex flex-col">
                                    <label htmlFor="">Phone Number</label>
                                    <Input value={formDataRegistration.phoneNumber} name="phoneNumber" onChange={(e) => setFormDataRegistration({ ...formDataRegistration, phoneNumber: e.target.value })} type="number" placeholder="Enter Your Phone Number" />
                                </div>
                            </div>
                            <div className='thirdRowRegistration gap-5 flex flex-wrap'>
                                <div className="registrationPassword flex flex-col">
                                    <label htmlFor="">Password</label>
                                    <Input value={formDataRegistration.password} name="password" onChange={(e) => setFormDataRegistration({ ...formDataRegistration, password: e.target.value })} type="password" placeholder="Enter Password" />
                                </div>
                                <div className="registrationPasswordConfirmed flex flex-col">
                                    <label htmlFor="">Confirmed Password</label>
                                    <Input value={formDataRegistration.confirmedPassword} name="confirmedPassword" onChange={(e) => setFormDataRegistration({ ...formDataRegistration, confirmedPassword: e.target.value })} type="password" placeholder="Enter Confirmed Password" />
                                </div>
                            </div>
                            <div className="genders flex flex-col ">
                                <h2>Gender</h2>
                                <div className='flex subGenders'>
                                    <div className='flex gap-1'>
                                        <input name="gender" type="radio" value="male" checked={formDataRegistration.gender === "male"} onChange={handleGenderChange} />
                                        <label htmlFor="">Male</label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <input name="gender" type="radio" value="female" checked={formDataRegistration.gender === "female"} onChange={handleGenderChange} />
                                        <label htmlFor="">Female</label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <input name="gender" type="radio" value="other" checked={formDataRegistration.gender === "other"} onChange={handleGenderChange} />
                                        <label htmlFor="">Others</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id='createAccountBtn'>Create an account
                            <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5L30.3333 5M30.3333 5L26.3333 0.999999M30.3333 5L26.3333 9" stroke="#B689FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateAccount




















