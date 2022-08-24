import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './HomeCss/Slider2.css'
import  './HomeCss/Sild.css'
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SliderDiv } from "../../StyledComponents/SliderDiv"

export const Slider2 = () => {
  const [videoImg, setvideoImg] = useState(false)
  

  const setImg = ()=>
  (
    setvideoImg(!videoImg)
  )
  
   

    const makeupData =[
      {
        image_url:
          "https://cdn07.nnnow.com/web-images/large/styles/JY27S21V62P/1649999368078/1.jpg",
        image2_url:
          "https://cdn16.nnnow.com/web-images/thumbnail/styles/JY27S21V62P/1649999368063/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Eye Pods",
        price: "₹ 6,500"
        
      },
      {
        image_url:
          "https://cdn17.nnnow.com/web-images/large/styles/2LJHP9ZCBV8/1645680487451/1.jpg",
        image2_url:
          "https://cdn15.nnnow.com/web-images/thumbnail/styles/2LJHP9ZCBV8/1645680487446/3.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Macro Tech Eye Crayon - Brown",
        price: "₹ 2,350"
        
      },
      {
        image_url:
          "https://cdn18.nnnow.com/web-images/large/styles/9K63PXQWLFJ/1649998952391/1.jpg",
        image2_url:
          "https://cdn08.nnnow.com/web-images/thumbnail/styles/9K63PXQWLFJ/1649998952385/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"I Need A Rose Lip Gloss - Daphne",
        price: "₹ 2,600"
        
      },
      {
        image_url:
          "https://cdn16.nnnow.com/web-images/large/styles/LXIPKNCS9XP/1649999294883/1.jpg",
        image2_url:
          "https://cdn11.nnnow.com/web-images/large/styles/LXIPKNCS9XP/1649999294867/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"I Need A Rose Lip Gloss - Daphne",
        price: "₹ 2,600"
        
      },
      {
        image_url:
          "https://cdn08.nnnow.com/web-images/large/styles/CZLPWJPNK1M/1644913480935/1.jpg",
        image2_url:
          "https://cdn15.nnnow.com/web-images/large/styles/CZLPWJPNK1M/1644913480926/2.jpg",
        brandname: "SEPHORA COLLECTION",
        productDescription:"Recycled Plastic Sharpener",
        price: "₹ 400"
        
      },
      {
        image_url:
          "https://cdn03.nnnow.com/web-images/large/styles/DST8JG893JI/1645680474489/1.jpg",
        image2_url:
          "https://cdn19.nnnow.com/web-images/large/styles/DST8JG893JI/1645680474479/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Glam Face Palette - Dark",
        price: "₹ 5,800"
        
      },
      {
        image_url:
          "https://cdn00.nnnow.com/web-images/large/styles/WX88ZXZP9J1/1646888841078/1.jpg",
        image2_url:
          "https://cdn06.nnnow.com/web-images/large/styles/WX88ZXZP9J1/1646888841074/3.jpg",
        brandname: "HUDA BEAUTY",
        productDescription:"Mini Nudies 5 Piece Kit",
        price: "₹ 5,3750"
        
      },
      {
        image_url:
          "https://cdn01.nnnow.com/web-images/large/styles/EDUVRFR9P45/1646888841513/1.jpg",
        image2_url:
        "https://cdn19.nnnow.com/web-images/large/styles/EDUVRFR9P45/1646888841511/3.jpg",
        brandname: "HUDA BEAUTY",
        productDescription:"GloWish Luminous Pressed Powder - 02 Fair Light",
        price: "₹ 2,900"
        
      },
      {
        image_url:
          "https://cdn00.nnnow.com/web-images/large/styles/0IAKBM2KYZ6/1645680487478/1.jpg",
        image2_url:
        "https://cdn13.nnnow.com/web-images/large/styles/0IAKBM2KYZ6/1645680487469/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Mini Xenon Eyeshadow Palette",
        price: "₹ 2,450"
        
      }

  ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (

    <div style={{display:"flex", textAlign:"center",marginTop:"1%",width:"82%",margin:"auto",justifyContent:"space-between", marginBottom:"100px"}}>
    <div style={{
        width:"53%"
       
       
    }}>
<Carousel responsive={responsive} 
autoPlay={false}
autoPlaySpeed={50000}
>
    {makeupData.map((e,i)=>
    (
  <SliderDiv> 
    <img id='image1' width="85%" src={e.image_url} alt="" />
  <img id='image2'width="85%" src={e.image2_url} alt="" />
  
  
<div><div id="Scrollup">
  <button><HiOutlineShoppingBag id="symbollcss"></HiOutlineShoppingBag>
                        <span id="textCSS">ADD TO CART</span></button>

                    <button><MdFavoriteBorder id="symbollcss"></MdFavoriteBorder>
                        <span id="textCSS">FAVOURITE</span></button>
                  </div></div>

<div >
<span style={{marginRight:"5px",paddingBottom:"5px"}}><img width="20px" src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png" alt="" /></span>
  <span style={{color: "rgb(213, 0, 50)",fontWeight:"bold",fontSize:"12px"}}>OFFER</span>
  <div  >  <span className='tag1' style={{padding:"5px 0px 0px 0px"}} >{e.brandname} <p style={{fontWeight:"lighter"}}>{e.productDescription}</p>
  <span >{e.price}</span>
  </span>   
  
  </div>
  
 
</div>
</SliderDiv>
    ))}
</Carousel>

    </div>
    <div  className={videoImg ? "videoPlaynothide" : "videoPlay"}>
   <img style={{float:"right"}} onClick={setImg} width="20px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAPEA8QDw8OEA8QFRIQEg8NDQ8NFREWFxUTFhUYHSggGBolGxMVIT0hJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGisdHx0tLS0tLS0rKysrListLS0tLS0tLS0rLS0tLS0tKy0tLS0tLSstLS0tLS0tKystLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFAwIGB//EADMQAAIBAwEEBwgCAwEAAAAAAAABAgMEETESIUFRBTJScZKxwRMUInKBkaHhYdFCovBi/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAUD/8QAJhEBAQADAAAFBAMBAQAAAAAAAAECAxETITFRkQQSMmEiQXFSQv/aAAwDAQACEQMRAD8A/cQAHKvXjBZk8eb+g6tjhll5SM6t0o/8I4/l739itrXh9L/1VaV5Uf8Am/puI7XtNGE/p495n25fdjtT4WH/ACe8T7cvux2p8LD2PeZ9ufiY7TwsPaHvE+3PxMdp4eHtPhHvE+3PxMdp4eHtPg9vPtz8T/sdp4ePtPg9vPtz8T/sdp4ePtPg9vPtz8THaeHj7T4Pbz7c/Ex2nh4+0+D28+3PxMdp4ePtPg9vPtz8THaeHj7T4Pbz7c/Ex2nh4+0+D28+3PxMdp4ePtPg9vPtz8THaeHj7T4Pbz7c/Ex2nh4+0+D3ifbn4mO08PH2nwn3ifbn4mO08PD2nwe8z7cvux2nhYez0ruov839d47Vbo1+yxS6TkuslJfZkyvLL6XG+l40ba5jPqvfye5lusmevLD1dwoAAAFS+vFTWFvk9Fy/lkWvbTpud8/RjVJuTzJ5bKujjjMZyPIWAAAAAAAAAAAAAAAAAAAAAAAABGTTynhrigiyWcrXsL7b+GW6X4l+y0rn7tH2ec9F8lnAOVxWUIuT4fl8BV8MPuy4wKk3JuT1ZR1McZjOR5CwAAAAAAAAAAAAAAAAAAAAAAAAAABPjyCLOzjdsbjbjl9Zbn38y0czdr+zLiyS8esjpermShwisvvf/fkra3/S48lyUCGsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtdGVdmolwlu+vASs/1OP3Yd9m2ejneT5+7lmpN/+mvtuPO+rqapzCOQeoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjLDT5NMf2rlOzj6PaLuT9r5+468vml5spXV1/jP8AI8BcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhDd2yzmcjFrdaXzS8ytdHX+MeQuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQitfaLsHGXV60vmfmVrbh+MeQuAAAAAAAAdqFrOe+K3c3uQ48s92OF5XOpBxeGsMcXxymU7HkLAAAAAAIpt4Sy2EWyTtd6tnOK2nHd/G/HeOPLHfhleRwD2AAAAAAAAIYRWpklhZtXrS735kNmH4xAXAAAAAAAW7Gz23l7oL8/wAEydZt277fKerZhFJYSwlwLOfbb51xurZVFh7nwfFCvTXsuF8mJWpOD2Zar7NFK6WGcznY8BcAAAJhByaSWWwrllMZ2tqys1TWXvk+PL+EWkc7buud/S00S8WTf2Oz8cF8PFcv0VsbdG/v8cmeQ2JAAAAAABDCGjtEsKhU60u9+ZDZh+MQFwAAAAAO1nQ25qL01fcI8d2f2Y9jehFJJLckXcy3t7XoABwurZVFh68HxQX17Lhexh1qTg9mWq+zKOnhnMp2PAXAJhByaSWWwrllJO1t2Voqa5yer9EWkc3btud/S0S8gCGgMTpG3UJbtJb8cil8nR+n2XLHz/pVDQAAAAABDCF8liUp6vvZDXh+MQFwAAAAAPdCq4SUlw/K5CKZ4TOcret66mk19uKZfrl54XC8rqFQABwurZVFh68HxTHF9ey4XsYdak4PZksPzRR08M5nOx5hByaSWWwnLKYztbdlaKmucnq/RFpHN27bnf0tEvIAAeKtRRTbeEgnHG5XkYV3cOpLPDRLkil83T1a/sx44h6gAAAAAQwhfJYlKer72Q2Y+kQFgAAAAAAHW2rum8r6rg0I89muZzlblvXU1lftMt1zM8LheV1JVAAHC6tlUWHrwfFMc6vr2XC9jxZWiprnJ6v0REnFtu2539LRLyAAHirUUU23hIJkuV5GJeXTqPlFaL1ZS10tOqYT9q4ewAAAAAACGEL5LEpT1feyGzH0iAsAAAAAAAAdbau6byvquDQ689muZzlblvXU1tL9pl3MzwuF5XUKgAAAAAeKtRRTbeEgmS28jEvLp1HyitF6spa6WrTMJ+1cPYAAAAAAAAhhC+SxKU9X3shsx9IgLAAAAAAAAADrb3DpvK+q4NDrz2a5nOVuW9ZTW0v2nyLuZnhcLyuoVAAADxVqKKbbwkEzG28jEvLp1HyitF6spa6OnTMJ+1cPcAAAAAAAAAQwhfJYlKer72Q2Y+kQFgAAAAAAAABMIOTSSy2FcspjO1t2Vqqa5yer4dxaTjm7dtzq0S8gAAA4XVuqkcP6PkxV9ey4XrDrUnBuMtfw0UdPDOZzseAuAAAAAAAAAIYQvksSlPV97IbMfSICwAAAAAAABMIOTwllsK5ZSTtbdlaKmucnq/RFpHN27bnf0tEvIAAAAADhdWyqLD14PimL5r69lwvYw61Jwey9fwyjp4ZzKdjwFwAAAAAAACGEL5LEpT1feyGzH0iAsAAAAAAAmEXJpJZbCuWUxna27K0VNc5PV+iLSObt23O/paJeQAA8VKiim28JBMlt5HmhXU1mP7TCc8LjeV1CoAA4XVsqiw9eD4pir69lwvYw61JwezLX8NFHTwzmU7HgLgAAAAAAIYQvksSlPV97IbMfSICwAAAAAExi20ksthW5STtbVjaKms6yer5fwi0jnbttzv6WyXiAAPFSooptvCQTjLleRiXl06j5RWi9WUtdLTpmE/bxbV3TeV9VwaEW2a5nOVuUK6msr9p8i7mZ4XC8rqFQABwu7ZVFh68HyYemvZcL2MKrTcW4vVFHSwzmU7HkLgAAAAAQwhfJYlKp1pd78yGvD8YgLgAAAAAWejqijUTfFNZ5NiPD6jG3DybhdzUgAPFSooptvCQTJcryMS8unUfKK0XqUtdLTqmE/auHsAdbau6byvquDQjz2a5nOVuW9dTWV+0y7mZ4XC8rqFQCAMjpaonNJaxW/wDorW/6XGzG2qJDUAAAAABDCF8liUqnWl3vzIa8PxiAuAAAAABAGp0dfaQm+5+jJlYd+j/1i0yzI8Vaiim28JBOONyvIxLy6dR8orRerKWulq0zCftXD2AAADrbV3TeV9VwaEvHns1zOcrct66msr9plo5meFwvK6kqqN/e7Pwx6z/1/ZFrRp03K9voxyrocAkAAAAACGENDZJYeqVXrS+Z+ZDZh+MeQuAAAAAAAEC7bdIyisSW0lpvwy0rLs+mmV7PJwubmVR79yWi4Ii166tUwjiHqAAAAAB0oV3B5j9uDQeezXM5yrdbpRtYjHZb46/Ynrwx+lkvbVBlWqTgSkAAAAAABDCK0iWFQrdaXzPzIrZh+MeQuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQitbBdgZtfry+aXmVrbr/ABn+R4C4AAAAAAAAAAAAAAAAAAAAAAAAAAAABDIRfRt7Jdzusm6WJz+aXmVvq3avwn+OYegAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAivotgu5PWV0rTxPPCSz9V/yK31bvpsu489lMhpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO9jT2qkVwTy+5CPHfl9uFbxdy1e+t9uGOK3rv5EWPXTs+zLrCKupL0CQAAAAAAAAAAAAAAAAAAAAAAAAAAIA2ei7fZjtPWX4iWkc76jZ92XJ6RdJZkhLN6Rss/HBb+K5/yiLGrRv5/HJlFW9IAAAAAAAAAAAAAAAAAAAAAAAAAgDQ6PstrE5L4eC5/omRj37+fxxa5ZiAjgEgFO6sIz3r4Zc1o+9EWPbXvyw8vVmVrKcdY5XOO8rxtw34ZODD1liMgMgMgMgMgMgMgMgMgMgMgMgMgMgMgMgMgMgAdd6VrOWkX3vcg88t2GP9tG16OUd8vif+q/stIx7Pqbl5TyXyWcAAAAEElQQj2U7zUitGHorELgAAAAAAAAAAAAAAAAAAAd7XUmK5ei8yWb+0kkSQkAAf/Z" alt="" />
    <iframe  width="700" height="420" 
    src="https://www.youtube.com/embed/QFG8omRfQos" title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
   >
     
     </iframe> 
    </div>
    
    <div className='videoImage'  >
     
     <img width="8%" onClick={setImg} style={{borderRadius:"50%"}} 
     src="data:image/jpeg;base64,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" alt="" />
    
    </div>
    

    
    </div>
  )
}