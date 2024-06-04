"use client";
import Header from '@/client/components/Header' ; 
import Footer from '@/client/components/Footer' ; 
import Link from 'next/link';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';
import Q_logo from '@/../../public/Q_logo_trans.png'
import {useState} from 'react' 



const Welcome = () => {

    const [username , setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [gender , setGender] = useState("")
    const [dob , setDob] = useState("")

    return (
        <main>
            <Header/>
            <section className = "pr-1 mx-auto grid grid-cols-3 gap-1">
                <div className = "col-span-2">
                    <div className = "bg-qu_blue-600 p-4 text-gray-200">
                        <span className = "text-[3rem] text-qu_yellow-400">Looking For a Stranger Online?</span>
                        <p className = "text-[1.6rem] text-center text-gray-300">
                            Well Qubik have got your back.
                        </p>
                        
                        <p className = "text-[1.1rem] text-right pr-6 text-gray-200">
                            start a quick chat now !!
                        </p>
                    </div>
                    <div className = "flex justify-center items-center mx-auto my-24">
                        <button className = " flex py-5 px-5 items-center space-x-2 justify-center text-white bg-qu_blue-500 h-[3rem] w-[18rem] rounded-full text-left">
                            <Link href = '/'>
                                <span className = "">Go Anonymouos</span>
                            </Link>
                            <FaRegArrowAltCircleRight />
                        </button>
                    </div>
                </div>
                <div className = "border-2 rounded">
                    <span className = "text-[2.1rem] flex justify-center items-center text-gray-400">Sign up</span>
                    <hr className = "w-[75%] mx-auto "/>
                    <Image src = {Q_logo} height = {100} width = {100} alt="Q_logo" className = "mx-auto mt-2"></Image>
                    
                    <form className = "w-[75%] my-8 mx-auto border-2 border-gray-300 rounded-md bg-gray-100 flex flex-col justify-start space-y-3 p-5">
                        <div className = "flex flex-col space-y-3">
                            <label htmlFor='Username'>
                                <span className = "qu_form-label">
                                    Username
                                </span>
                                
                                
                            </label>
                            <input 
                                    id = "username" 
                                    placeholder=''
                                    value = {username}
                                    className = "qu_form-input"
                                    onChange={(e) =>
                                        (setUsername(e.target.value))
                                    }
                            />

                            <label htmlFor='email'>
                                <span className = "qu_form-label">
                                    email
                                </span>
                                
                            </label>

                            <input 
                                    id = "email" 
                                    placeholder=''
                                    value = {email}
                                    className = "qu_form-input"
                                    onChange={(e) =>
                                        (setEmail(e.target.value))
                                    }
                            />

                            <label htmlFor='password'>
                                <span className = "qu_form-label">
                                    password
                                </span>
                                
                            </label>

                            <input 
                                    id = "password" 
                                    type = "password"
                                    placeholder=''
                                    value = {password}
                                    className = "qu_form-input"
                                    onChange={(e) =>
                                        (setPassword(e.target.value))
                                    }
                            />
                        </div>

                        <div className = "flex flex-col justify-start items-start space-y-3">
                            <span className = "qu_form-label">
                                Gender
                            </span>
                            <div className = "grid grid-cols-2 gap-2">
                                <input type="radio" id="male" name= {gender} value="Male" onClick={e => (setGender('Male'))}/>
                                <label htmlFor="male" className = "text-gray-600">Male</label>
                                <input type="radio" id="female" name= {gender} value="Female" onClick={e => (setGender('Female'))}/>
                                <label htmlFor="female" className = "text-gray-600">Female</label>
                                <input type="radio" id="others" name= {gender} value="Others" onClick={e => (setGender('Others'))}/>
                                <label htmlFor="others" className = "text-gray-600">Others</label>
                            </div>
                        </div>

                        <label htmlFor='dob'>
                            <span className = "qu_form-label">
                                DOB
                            </span>
                        </label>
                        <input 
                                id = "dob" 
                                type = "date"
                                placeholder=''
                                value = {dob}
                                className = "qu_form-input"
                                onChange={e => (setDob(e.target.value))}
                        />

                        <button className = "flex justify-center items-center bg-qu_blue-500 p-3  w-60 mx-auto rounded-[2rem]">
                            <span className = "capitalize text-gray-100 text-[1.2rem]">create account</span>
                        </button>
                    </form>
                </div>
            </section>
            <Footer/>
        </main>        
    );
}

export default Welcome ;