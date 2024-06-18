import {FC , useEffect} from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import comp_logo from '../../../public/Qubik_logo_trans.png'


const Navbar : FC = () => {
    // fetch login details from the db.
    
    return (
        <nav>
            <div>
                <Link href = "/home">
                    <Image src = {comp_logo} width = {165} alt = "company Logo" />
                </Link>
            </div>
            <div>
                {/* render tab based on user type : anonymous || loggedIn */}
            </div>
            <div>
                {/* render login details and buttons based on user type : anonymous || loggedIn */}
            </div>
        </nav>
    )
}

export default Navbar;