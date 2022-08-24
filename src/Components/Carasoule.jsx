// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'

const Carasoule = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div  style={{width:"100%"}}>
 
        <Slider {...settings}>
          <div style={{width:"100%"}}>
            <img style={{width:"100%"}} src="https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg"  alt="img"/>
          </div>
          <div>
            <h3><img style={{width:"100%"}} src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg" alt="img"/></h3>
          </div>
          <div>
            <h3><img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/ABH_Homepagebannerdesktop(1).jpg" alt="img"/></h3>
          </div>
          <div>
            <h3><img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Clarins_Topbannerdesktop.jpg" alt="img"/></h3>
          </div>
          <div>
            <h3><img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg" alt="img"/></h3>
          </div>
          <div>
            <img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_HomepageBannerdesktop.jpg" alt="img"/>
          </div>
        </Slider>
    </div>
  )
}

export default Carasoule