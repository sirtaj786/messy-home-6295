import React from 'react'
// import {UserIcon,HeartIcon,CubeIcon,LogoutIcon, ZoomOutIcon} from "@heroicons/react/outline"
import {useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Head.css";
import {Option} from "./optStyled"
import { useNavigate } from 'react-router-dom';
export const HeadBar = () => {
  const [toggle, setToggle] = useState(true);
  const [refreser,setRefreser]=useState(false)
  const userName = JSON.parse(localStorage.getItem("user"))||"Login";

  const navigate = useNavigate()

  const logouter = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("sephoraAddress")
    localStorage.removeItem("sai")

    setRefreser(!refreser)
    navigate("/")
  }
  
  // const handleToggle = () => {
  //   setToggle(false);
  // };
  return (
    <div className="head_wrapper">
      <div className="co_head">
        <div className="company_logo">
          <img
            src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png"
            alt="companyLogo"/>
        </div>
        <div className="user_det">
          <p>{userName}</p>
          <div className="user_opt">
            <Option>
             <span> My Account </span>
            </Option>
            <Option>
             <span> Favorites </span>
            </Option>
            <Option>
             <span> My Orders </span>
            </Option>
            <hr style = {{width:"80%", margin : "auto", marginTop :"8px"}}/>
            <Option>
             <span>Sign Out </span>
            </Option>
          
          </div>
        </div>
      </div>
    </div>
  );
};
