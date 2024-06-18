"use client";
import Header from '@/client/components/Header';
import Footer from '@/client/components/Footer';
import Link from 'next/link';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Button } from '../component';
import { PiChatText } from "react-icons/pi";
import { RiVideoChatLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import {Tags} from '@/client/component'
import { useState } from 'react';
// import { useState } from 'react'
// import { Input } from '../component';



const Welcome = () => {
    /*
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")
    */

    const size = '2.5rem'
    return (
        <main>
            <Header />
            <section className="pr-1 mx-auto ">
                <div className="ml-1">
                    <div className="bg-qu_blue-600 p-4 text-gray-200">
                        <span className="text-[3rem] text-qu_yellow-400">Discover Qubik: Where Anonymity Meets Connection</span>
                        <p className="text-[1.6rem] text-center text-gray-300 my-3">
                            Step into a world where your voice echoes freely. Qubik is your sanctuary for candid conversations and genuine connections. Embrace anonymity without compromise—engage, share, and explore without revealing your identity. Join a community of seekers, thinkers, and friends-to-be. Whether you're here to chat, share stories, or simply listen, Qubik empowers you to be authentically you.

                        </p>

                        <p className="text-[1.1rem] text-right pr-6 text-gray-200">
                            Dive into Qubik today and redefine the way you connect online. start a quick chat now !!
                        </p>
                    </div>
                    <div className="my-[8%] flex flex-col justify-center items-center space-y-10">
                        <div className="flex flex-row justify-center items-center">
                            <Button icon={<PiChatText size={size} />} text='Text Chat' width={10} height={10} url = '/text-chat' />
                            <Button icon={<RiVideoChatLine size={size} />} text='Video Chat' width={15} height={10} url = '/video-chat'/>
                        </div>
                        {/*
                        <div className='flex flex-col justify-center items-center space-y-5'>
                            <div className="flex justify-center items-center">
                                <input type="text" className="border-2 px-6 py-[3%] outline-none rounded-l-full w-[50%] border-gray-300" />
                                <button className="bg-qu_blue-600 text-gray-200 rounded-r-full px-3 py-1">
                                    <IoMdAddCircleOutline size={size} />
                                </button>
                            </div>
                            <div className = "flex flex-row justify-center items-center space-x-2">
                                <span className = "text-lg text-gray-500">Tags:</span>
                                <div className={`border-dashed border-gray-400 bg-qu_yellow-200 w-cover mx-auto p-4 border-4 rounded-lg flex flex-row justify-evenly items-center`}>
                                    <Tags tag = {"tiktok"}/>
                                </div>
                            </div>

                        </div>
                        */}
                    </div>
                </div>
                {/*

                <div className="flex justify-center items-center mx-auto my-24">
                        <button className=" flex py-5 px-5 items-center space-x-2 justify-center text-white bg-qu_blue-500 h-[3rem] w-[18rem] rounded-full text-left">
                            <Link href='/'>
                                <span className="">Go Anonymouos</span>
                            </Link>
                            <FaRegArrowAltCircleRight />
                        </button>
                </div>
                <div className="border-2 rounded">
                    <span className="text-[2.1rem] flex justify-center items-center text-gray-400">Sign up</span>
                    <hr className="w-[75%] mx-auto " />
                    <Image src={Q_logo} height={100} width={100} alt="Q_logo" className="mx-auto mt-2"></Image>

                    <form className="w-[75%] my-8 mx-auto border-2 border-gray-300 rounded-md bg-gray-100 flex flex-col justify-start space-y-3 p-5">
                        <div className="flex flex-col space-y-3">
                            <Input id="username" type="text" value={username} setState={setUsername} />
                            <Input id="email" type="email" value={email} setState={setEmail} />
                            <Input id="password" type="password" value={password} setState={setPassword} />
                        </div>

                        <div className="flex flex-col justify-start items-start space-y-3">
                            <span className="qu_form-label">
                                Gender
                            </span>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="radio" id="male" name="gender" value="Male" onClick={e => (setGender('Male'))} />
                                <label htmlFor="male" className="text-gray-600">Male</label>
                                <input type="radio" id="female" name="gender" value="Female" onClick={e => (setGender('Female'))} />
                                <label htmlFor="female" className="text-gray-600">Female</label>
                                <input type="radio" id="others" name="gender" value="Others" onClick={e => (setGender('Others'))} />
                                <label htmlFor="others" className="text-gray-600">Others</label>
                            </div>
                        </div>

                        <Input id="dob" type="date" value={dob} setState={setDob} />

                        <button className="flex justify-center items-center bg-qu_blue-500 p-3  w-60 mx-auto rounded-[2rem]">
                            <span className="capitalize text-gray-100 text-[1.2rem]">create account</span>
                        </button>
                    </form>
                </div>
            */}
            </section>
            <hr className = "w-[80%] mx-auto my-3"/>
            <Footer />
        </main>
    );
}

export default Welcome;