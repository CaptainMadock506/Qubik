import Image from 'next/image';
import comp_logo from '../../../public/Qubik_logo_trans.png'
import Link from 'next/link';

const Header = () => {
    return (
        <main className = "container mx-auto flex p-6 items-center  justify-between">
            <div>
                <span>
                    <Link href = '/'>
                    <Image src = {comp_logo} width = {165}  alt = "qubik logo" />
                    </Link>
                    
                </span>
            </div>
            
            <div>
                <div className = "border-2 w-cover h-8 rounded-full flex items-center">
                    <div className = "mx-1 blur-[0.05rem] shadow-green-500 bg-green-500 w-6 h-6 shadow-2xl rounded-full">
                    </div>
                    <span className = "text-xl text-gray-500 mx-3">
                        34k
                    </span>
                </div>
            </div>

            {/*
            <div>
                <ul className = 'flex justify-between py-auto [&>li]:px-3 text-gray-600'>
                    <li>
                        <Link href = '/'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href = '/'>
                            Contact Us
                        </Link>
                    </li>
                    <li className = "text-qu_purple-500 hover:text-qu_purple-700">
                        <Link href = '/register'>
                            <button>
                                Register
                            </button>
                        </Link>
                    </li>
                    <li className = 'bg-qu_blue-500 text-center rounded-full text-qu_yellow-500 hover:bg-qu_blue-300'>
                        <Link href = '/login'>
                            <button>
                                Login
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        */}
        </main>
    )
}

export default Header ; 