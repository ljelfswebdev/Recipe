import Link from "next/link";
import { Avatar } from 'antd'
import { useRouter } from 'next/router';


const Navbar = () => {

    const router = useRouter(); 
 
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark" >
        <div className="container-fluid"> 
        <Link href="/"><a className="navbar-brand d-flex"><Avatar size={40} src="/favicon.ico" /><h4 className="px-3 mt-2">LJ | Recipies</h4></a></Link> 
               <>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/random" ><a className="nav-link"><h5>Random</h5></a></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/contact"><a className="nav-link"><h5>Contact</h5></a></Link>
                        </li> */}
                    </ul>
                </div>
                </>        
        </div>
    </nav>
    );
}
 
export default Navbar;