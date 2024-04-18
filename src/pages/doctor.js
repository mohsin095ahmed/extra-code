'use client'

import { useEffect, useState } from "react";
//import Navbar from "./components/Nav";
import Navigation from "./components/Navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const doctors = ()=>{
    const [doctor, setdoctor] = useState([]);
    const getAllDoctor = async()=>{
    await axios.get("http://localhost:4000/api/doctor/").then(res=>{ setdoctor(res.data.doctors)
      console.log(doctor, "hhhh")} ).catch(err=> console.log(err));
    }
    useEffect(()=>{
         getAllDoctor()
      
    },[]);
    console.log(doctor)
    return(
        <>
        <Navigation/>
          <h1>Doctors</h1>

         <div>
          {doctor && doctor.map((d)=>(
            <div key={d._id} className="border">
               <div>
                <Image src={d.image} width={100} height={100} alt="doctros"/>
               </div>
               <div>
                   <h1>{d.name}</h1>
                   <h2>{d.expert}</h2>
                   <h3>{d.qulification.map((q)=>(
                     <span>{q}</span>
                     
                   ))}</h3>
                  <h3>{d.email}</h3>
                  <Link 
                  href={{
                    pathname:`./${d._id}`,
                    query:{
                      data:d._id
                    }
                  }}
                    
                  >
                     <button> OPINTMENT</button>
                  </Link>
               </div>

            </div>
          ))}

         </div>








          {/* <h1>{doctor[0].name}</h1> */}
          
        </>
    )
} 
export default doctors;