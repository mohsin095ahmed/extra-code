'use client'

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation";
import Image from "next/image";
import Alert from "./components/Alert";
import Clent from "./components/Clent";


export default function Home() {
const [user, setuser]= useState();
const [num , setnum]= useState(0); 
const router = useRouter();
const  buttonRef = useRef();
const  alertRef = useRef()

 const childProps = (data)=>{
  setnum(num + 1);
 }

useEffect(()=>{
  

  const item = localStorage.getItem("user-Token");
  setuser(item);
  if(!item){
    router.push("./Login")
  }else{
    console.log("no")
  }
},[num])
   
    function ale() {
      const bo = alertRef.current.childNodes[0];
      console.log("hhhh");
      //alertRef.current.click()
      localStorage.setItem("open", true)
      console.log(bo);
      bo.click()
    }
   

  return (
    <>
       
      <Navigation childProps={childProps} />
       <div className="center">
          <h1  className="text-3xl  sm:text-4xl text-black-100 font-bold font-serif ">WELCOME</h1>
          <h1 className=" text-5xl  sm:text-6xl font-bold font-serif text-blue-500 ">HEXA LAB&apos;s</h1>
        </div>
        <div className=" h-[350px] w-[100%] flex flex-wrap justify-center ">
          <div className="  h-[100%] w-[40%] items-center  ">
          <Image src={"/image/d.jpg"} height={100}  width={100} alt="DOCTORS" className=" object-contain w-[80%] h-[100%]"/>
          </div>
          
          <div className="  box-border w-[300px]  sm:w-[400px] md:[500px] lg:w-[800px]" >
            <h1 className="text-3xl sm:text-4xl font-bold m-6 mt-[40px]">What is health &#x3f;</h1>
            <p className="text-justify m-6 mt-[40px]">
              This means that health is a resource to support an individual &apos;s function in wider society, rather than an end in itself. A healthful lifestyle provides the means to lead a full life with meaning and purpose.
              In 2009, researchers publishing inThe LancetTrusted Source defined health as the ability of a body to adapt to new threats and infirmities.
              They base this definition on the idea that the past few decades have seen modern science take significant strides in the awareness of diseases by understanding how they work, discovering new ways to slow or stop them, and acknowledging that an absence of pathology may not be possible.
            </p>
          </div>
        </div>
      
    <button ref={buttonRef} onClick={ale} value="click">log</button>          

<div ref={alertRef}>
    <Alert po={"po"}  onClick={()=>{console.log("open")}} className=""></Alert>

</div>

    </>
     )
}
