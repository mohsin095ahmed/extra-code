import axios from "axios";
import { useEffect, useState } from "react";
const allOpintment = () =>{
    const [opintment, setopintment] = useState([]);
    const [bool, setbool] = useState(false);
    const [token, settoken] = useState();
    const [roll, setroll] = useState();
    const verufy = ()=>{
      settoken(localStorage.getItem("user-Token"));
      setroll(JSON.parse(localStorage.getItem("user-roll")));
        // const token = localStorage.getItem("user-Token");
        // const roll =JSON.parse(localStorage.getItem("user-roll"));
        setbool(true); 
      console.log("dd---->", token,roll);
    
       }

       const getAllOpintment = async()=>{
        console.log("dd---->",roll, token );
        // if(roll && token){
        //      await axios.get("http://localhost:4000/api/opintment/",{
        //     params:{
        //       roll:"dds",
        //     }
        //   },
        //   {
        //     headers: {
        //         "authorization": `Bearer ${token}`
        
        //       }
        //   }).then(res=>console.log("res--->",res)).catch(err=>console.log("err---->",err))

        // }
        if(roll && token){
           fetch("https://cute-ruby-penguin-hat.cyclic.app/api/opintment/",{
            method:"GET",
            headers:{
              "authorization": `Bearer ${token}`
            },
           }).then(res=> res.json()).then(res => console.log(res)).catch(err=> console.log(err))

        }


                 }
    useEffect(()=>{
      
     verufy();
   //  getAllOpintment()
    },[])
    
    useEffect(()=>{
      getAllOpintment()
    },[bool])
    return(
        <>
        <h1>Opimtmet</h1>
            
        </>
    )
}
export default allOpintment;