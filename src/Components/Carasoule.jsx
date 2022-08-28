// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import { Link } from "react-router-dom";

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
           <Link to="/mackupproduct"> <img style={{width:"100%"}} src="https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg"  alt="img"/>
           </Link></div>
          <div>
           <Link to="/hairproduct"> <h3><img style={{width:"100%"}} src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg" alt="img"/></h3>
           </Link></div>
          <div>
            <h3><Link to="/hairproduct"><img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/ABH_Homepagebannerdesktop(1).jpg" alt="img"/></Link></h3>
          </div>
          <div>
            <h3><Link to="/hairproduct"><img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Clarins_Topbannerdesktop.jpg" alt="img"/></Link></h3>
          </div>
          <div>
            <h3><Link to="/hairproduct"><img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg" alt="img"/></Link></h3>
          </div>
          <div>
          <Link to="/hairproduct"> <img  style={{width:"100%"}}src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_HomepageBannerdesktop.jpg" alt="img"/></Link>
          </div>
        </Slider>
    </div>
  )
}

export default Carasoule