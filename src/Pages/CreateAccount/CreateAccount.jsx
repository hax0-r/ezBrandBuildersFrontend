import React from 'react'
import Input from '../../Components/Input/Input'
import "./CreateAccount.scss"
import Button from '../../Components/Button/Button'


const CreateAccount = () => {

    const formSubmitHandler = (e) => {
        e.preventDefault()
    }

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
                                    <Input type="text" placeholder="Enter First Name" />
                                    {/* <input className='bg-transparent' type="text" placeholder="Enter Your First Name" /> */}
                                </div>
                                <div className="lastName flex flex-col">
                                    <label htmlFor="">Last Name</label>
                                    <Input type="text" placeholder="Enter Last Name" />
                                    {/* <input type="text" placeholder="Enter Your Last Name" /> */}
                                </div>
                            </div>
                            <div className='secondRowRegistration gap-5 flex flex-wrap'>
                                <div className="registrationEmail flex flex-col">
                                    <label htmlFor="">E-Mail</label>
                                    <Input type="email" placeholder="Enter Your Email" />
                                    {/* <input type="email" placeholder="Enter Your email" /> */}
                                </div>
                                <div className="registrationNumber flex flex-col">
                                    <label htmlFor="">Phone Number</label>
                                    <Input type="number" placeholder="Enter Your Phone Number" />
                                    {/* <input type="number" placeholder="Enter Your Phone Number" /> */}
                                </div>
                            </div>
                            <div className='thirdRowRegistration gap-5 flex flex-wrap'>
                                <div className="registrationPassword flex flex-col">
                                    <label htmlFor="">Password</label>
                                    <Input type="password" placeholder="Enter Password" />
                                    {/* <input type="password" placeholder="Enter Your Password" /> */}
                                </div>
                                <div className="registrationPasswordConfirmed flex flex-col">
                                    <label htmlFor="">Confirmed Password</label>
                                    <Input type="password" placeholder="Enter Confirmed Password" />
                                    {/* <input type="password" placeholder="Confirmed Your Password" /> */}
                                </div>
                            </div>
                            <div className="genders flex flex-col ">
                                <h2>Gender</h2>
                                <div className='flex subGenders'>
                                    <div className='flex gap-1'>
                                        <input type="radio" name='same' />
                                        <label htmlFor="">Male</label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <input type="radio" name='same' />
                                        <label htmlFor="">female</label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <input type="radio" name='same' />
                                        <label htmlFor="">Others</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id='createAccountBtn'>Create an account
                            <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5L30.3333 5M30.3333 5L26.3333 0.999999M30.3333 5L26.3333 9" stroke="#B689FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateAccount