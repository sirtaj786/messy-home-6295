import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import './otp.css'
export const OTP = () => {
  const [user, setUser] = useState([]);
  const [otper,setOtper]=useState("")
  const navigate = useNavigate();
 const handleformer = ()=>{
    if(otper==12345){

     let chaker = JSON.parse(localStorage.getItem("emailverify"));
     var userList = JSON.parse(localStorage.getItem("allusers")) || [];

     for(let i =0;i<userList.length;i++){
        if(chaker==userList[i].Email||chaker==userList[i].Num){
            localStorage.setItem("user", JSON.stringify(userList[i].Name));
            alert(`Welcome Back ${userList[i].Name}`)
            navigate('/')
            return

        }
     }

        navigate('/signup')
        return
    }
    alert("wrong otp please try again")
 } 
  
  return (
    <>
      <div className="forapper2">
        
    <div className="adorm2">
        <p></p>
    <p className="trncs0">OTP</p>
    <br />
    <p className="trncs0">Enter Received Otp</p>
    <form >
          <br />

          <input
            type="email"
            name="email"           
            placeholder="Enter Otp"
            
            required
            onInput={(e)=>setOtper(e.target.value)}
          />        
          <br />
          <br></br>
          <Button
          onClick={()=>handleformer()}
            style={{
              backgroundColor: "rgb(255,51,153)",
              border: "none",
              width: "90%",
            }}
            color="primary"
            variant="contained"
            value="Submit"
          >
            {" "}
            Continue{" "}
            
          </Button>
          
        </form>
        <p></p>
        <p style={{
              color: "rgb(255,51,153)",
            
            }}>          <Link to={`/login`}>
            Back to Login</Link></p>         
    </div>
      </div>
    </>
  );
};