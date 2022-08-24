import React from 'react'
import  './HomeCss/Slider.css'


import { Carousel } from "react-bootstrap";
import { Center, Text } from '@chakra-ui/react';
export const Slider1 = () => {
  const slideShowdata = [
     "https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Homepage_Beautypowerforall_Desktop.jpg",
     "https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_Topbanner_Newatsephoradesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/BenefitPlaytintTopBanner-Desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/22-april-2022/ABH_TopBanner_ABHMattelipstickslaunchDESKTOP.gif",
    "https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/HD-Top-Banner-Desktop-1125x500px-Sephora.jpg",
     "https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_TopbannerDesktop_GildedGlam.jpg",
  ]
  const divImage = [
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q2.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q3.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/10-may-2021/25MAR21_SEPHORA_BP_DESK_Q4.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q5.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/08-may-2021/7MAY21_SEPHORA_BP_Q6.jpg"
  ]
  const div2Image = [{img: "https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Bestsellers.jpg",
title:"BESTSELLERS"},
{img:"https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Bodycare.jpg",
title:"BODYCARE"},
{img: "https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Facial.jpg",
title:"FACIAL"},
{img: "https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Makeup.jpg",
title:"MAKEUP"}
   
  ]


  return (
    <div style={{marginTop:"5%"}}>



<br />
<div id='divimage'>
  {
    divImage.map((e,i)=>
    (
      <div key={i}>
  <img src={e} alt="" width="88%" height="100%"/>
  </div>
    ))
  }
</div>
<br /> <br />
        <Text fontSize={"40px"}>Brand of The Week</Text>
    <Center>
      <img width="85%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/ForestEssential_TopBanner_Brandoftheweekdesktop.jpg" alt="" />
    </Center>
    <br />
    {/* <div>
      <img width="81%" src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2022/HPBanner-Desktop.jpg" alt="" />
    </div> */}
<br />
    <div id='div2Image'>
      {div2Image.map((e,i)=>
      (
        <div key={i}>
          <img src={e.img} alt="" width="93%" />
          <Text style={{fontSize:'18px',letterSpacing:"1.7px",fontWeight:"500" }}>{e.title}</Text>
        </div>
      ))}
    </div>
   <br />
<div>
  <img width="85%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg" alt="" />
  </div>   
   </div>
  )
}