import Link from "next/link";
import { useEffect } from "react";
const Admin = () =>{
   

useEffect(()=>{
    console.log("dddd");
},[])
    return(
        <>
        
        <h1>
            Dashbord
        </h1>

        <Link
        href="./Adminpanel/allOpintment"
        >
            ALL Opintment
        </Link>
        </>
    )
}
export default Admin;