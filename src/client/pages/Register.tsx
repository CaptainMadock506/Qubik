"use client";

import Image from 'next/image';
import Q_logo from '@/../../public/Qubik_logo_trans.png'
import { FC, useState } from 'react'
import Link from 'next/link';
import { Input } from '../component';

const Register: FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")
    return (
        <div className="border-2 rounded">
            <Image src={Q_logo} height={300} width={250} alt="Q_logo" className="mx-auto my-3"></Image>
            <hr className="w-[75%] mx-auto " />
            <span className="text-[2.1rem] flex justify-center items-center text-gray-400">Sign up</span>
            <div className="flex justify-center space-x-1">
                <span className='text-gray-700'>Already an existing user?</span>
                <Link href='' className="text-qu_purple-400 hover:text-qu_purple-500">Sign In</Link>
            </div>
            <form className="w-[55%] my-8 mx-auto border-2 border-gray-300 rounded-md bg-gray-100 flex flex-col justify-start space-y-3 p-5">
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
    );
}

export default Register; 