import React from 'react'
import { Footer } from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import  './HomeCss/Slider.css'
import  './HomeCss/Slider2.css'
import ScrollButton from './ScrollButton'
import { Slider1 } from './Slider1'
import { Slider2 } from './Slider2'
import { Slider3 } from './Slider3'

export const Home = () => {
    const imagesData = ["https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_ContentP-story_Anti-AcneHeroes.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_ContentP-story_BrushUp.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/04-may-2022/se/Sephora_ContentP-story_FreshAF.jpg"]


const ImagesUrl = ["https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg",
"https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg",
"https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg"]

const ImagesUrl2 =["https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/01-april-2022/Kayali_NOTB.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/18-april-2022/se/HudaBeauty_NOTB_GLOWISHrange.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/05-april-2022/MarcJacobs_NOTB.jpg",
"https://logan.nnnow.com/content/dam/nnnow-project/19-april-2022/Clarins_NOTB.jpg"
]
const ImagesUrl3 = [
    {
        image:"https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg",
        h4Tag:"MAKING A LOOK",
        ptag:"With Anaita Shroff Adajania"
    },
    {
        image:"https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg",
        h4Tag:"7 MASKS amazing deals",
        ptag:"that'll save your skin from damage"
    },
    {
        image:"https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg",
        h4Tag:"LONG LASTING MAKEUP? ",
        ptag:"Here's how we can help to heal skin!"
    }
]



  return (
    <>
    <Navbar/>
<Slider1></Slider1>
 <Slider2></Slider2>
    <div style={{textAlign:"Center"}}>
        <div><img width="83%" height="10%" style={{marginLeft:'10%'}} src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" alt="" />
        <br />
        <br />
   
    <img width="82%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_HeaderStrip_ItsGettingHotInHeretext3310x240.jpg" alt="" />
        </div>
   
    <div id='divimageHome3' >
    {
    imagesData.map((e,i)=>
    (
      <div key={i}>
  <img src={e} alt="" width="93%" />
  </div>
    ))
  }

    </div>
<br />
<div><img width="83%" height="10%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg" alt="" /></div>
<Slider3/>
<div style={{textAlign:"Center"}}>
<div>
  <img width="83%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg" alt="" />
  </div>
  <div id='div2ImageHome4'>
      {ImagesUrl.map((e,i)=>
      (
        <div key={i}  >
          <img src={e} alt="" width="85%" id='shadow' />
        </div>
      ))}
    </div>
    <br />
    <div>
  <img width="83%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg" alt="" />
  </div>
<br />
  <div id='SixDiv'>
  {ImagesUrl2.map((e,i)=>
      (
        <div key={i}  >
          <img src={e} alt="" width="94%"  />
        </div>
      ))}

  </div>
  <br />
  <div>
  <img width="85%" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" alt="" />
  </div>
  <br />
  <div className='lastDiv'>
     
      {ImagesUrl3.map((e,i)=>
      (
        <div key={i} style={{marginLeft:"2%" ,paddingBottom:"24%"}} >
          <img src={e.image} alt="" width="94%" />
          <div id='lastText'>
          <h4 >{e.h4Tag}</h4>
         
           
         <p >{e.ptag}</p>
          </div>
           
          
    
        </div>

      ))}
     
    </div>
   </div>
    <ScrollButton/>
    </div>
    <Footer/>
    </>
  )
}