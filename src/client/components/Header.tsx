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
                <ul className = 'flex justify-between py-auto [&>li]:px-3 text-gray-600'>
                    <li>
                        <Link href = ''>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href = ''>
                            Contact Us
                        </Link>
                    </li>
                    <li className = "text-qu_purple-500 hover:text-qu_purple-700">
                        <Link href = ''>
                            <button>
                                Register
                            </button>
                        </Link>
                    </li>
                    <li className = 'bg-qu_blue-500 text-center rounded-full text-qu_yellow-500 hover:bg-qu_blue-300'>
                        <Link href = ''>
                            <button>
                                Login
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Header ; 