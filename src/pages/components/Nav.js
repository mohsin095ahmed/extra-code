//const { default: Link } = require("next/link")
import Link from "next/link"

const Navbar = ()=>{
    return(
        <>
        <nav>
         <ul>
         
           <li><Link href="/">HOME</Link></li>
           <li><Link href="/about">ABOUTUS</Link></li>
           <li><Link href="/bo">bo</Link></li>
         </ul>
        
        </nav>
        
        </>
    )
}
export default Navbar;