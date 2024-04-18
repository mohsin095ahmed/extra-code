

import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import SelectDate, { SelectMonth } from "./components/SelectDate";
//import { getServerSideProps } from "next/dist/build/templates/pages";
const opinment= ()=>{
    const router = useRouter();
    const dateRef = useRef()
    const Id = router.query.doctor;
    const [doctor, setdoctor] = useState();    
    const getAllDoctor = async()=>{
        if(Id){
            await axios.get(`http://localhost:4000/api/doctor/doctorId/${Id}`).then(res=>{
        //setdoctor(res.data)
        console.log(res.data)
     }).catch(err=> console.log(err));
        }
   

        }
     

   useEffect(()=>{
     ///getAllDoctor();
   
getAllDoctor()  
   },[])
   
const select = () =>{
    const month = ["january", "febuary", "march","april","may", "june","july","august","september", "october", "november","december"]
console.log(dateRef.current.value);
const monthNumber = dateRef.current.value.split("-")[1]-1;
console.log(month[monthNumber])
}
    return(
        <>
        <h1>
            DOCTOR OPINTMENT
        </h1>
          {/* <div>
            {  doctor.name }
          </div> */}

         <form>
            {/* start  */}
           {/* <SelectMonth/>
           <SelectDate/>
            */}
            <input type="month" ref={dateRef} onChange={select} autoFocus/>
         </form>


        </>
    )
}
export default opinment;

    export async function getStaticProps(){
        console.log("jdjjd")
        return{
          paths:[
            '/[doctor]'
          ]
        }
    }