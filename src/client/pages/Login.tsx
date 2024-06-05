"use client";
import Image from 'next/image';
import Q_logo from '@/../../public/Qubik_logo_trans.png'
import { FC, useState, ChangeEvent } from 'react'
import Link from 'next/link';
import { Input } from '../component';

const Login: FC = () => {
    type InputEvent = ChangeEvent<HTMLInputElement>
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [logged , setLogged] = useState<boolean>(false);
    return (
        <div className="border-2 rounded">
            <Image src={Q_logo} height={300} width={250} alt="Q_logo" className="mx-auto my-3"></Image>
            <hr className="w-[75%] mx-auto " />
            <span className="text-[2.1rem] flex justify-center items-center text-gray-400">Sign In</span>
            <div className="flex justify-center space-x-1">
                <span className='text-gray-700'>Not on Qubik yet?</span>
                <Link href='' className="text-qu_purple-400 hover:text-qu_purple-500">Sign Up</Link>
            </div>
            <form className="w-[55%] my-8 mx-auto border-2 border-gray-300 rounded-md bg-gray-100 flex flex-col justify-start space-y-3 p-5">
                <Input id="username" type="text" value={username} setState={setUsername} />
                <Input id="password" type="password" value={password} setState={setPassword} />

                <div className="flex justify-between items-center">
                    <div className="flex justify-start text-sm space-x-1">
                        <span className="text-gray-700">forgot your password already?</span>
                        <Link href='' className="text-qu_purple-400 hover:text-qu_purple-500">Recover it now!!</Link>
                    </div>
                    <div className="text-sm text-gray-700 space-x-1 flex justify-evenly">
                        <input type="checkbox" id = "loggedIn" name = "loggedIn" checked = {logged} 
                        className = "accent-qu_blue-500 "
                        onChange={(e:InputEvent) => setLogged(!logged)}/>
                        <label htmlFor='loggedIn' >Remember Me</label>
                    </div>
                </div>


                <button className="flex justify-center items-center bg-qu_blue-500 p-3  w-60 mx-auto rounded-[2rem]">
                    <span className="capitalize text-gray-100 text-[1.2rem]">Login</span>
                </button>
            </form>

        </div>
    )
}

export default Login; 