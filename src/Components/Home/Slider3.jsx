import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './HomeCss/Slider2.css'
import  './HomeCss/Sild.css'
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SliderDiv } from "../../StyledComponents/SliderDiv"

export const Slider3 = () => {
  
  
   

    const makeupData =[
        {
            image_url:
              "https://cdn09.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012732/1.jpg",
            image2_url:
              "https://cdn12.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012729/2.jpg",
            brandname: "OLAPLEX",
            productDescription:"N°4 Bond Maintenance Shampoo",
            price: "₹ 6,500"
            
          },

          {
            image_url:
              "https://cdn17.nnnow.com/web-images/large/styles/2VPHEST7O45/1606375877521/1.jpg",
            image2_url:
              "https://i.pinimg.com/474x/f7/db/35/f7db3597c92fad06b651041c2a34a26e.jpg",
            brandname: "SEPHORA COLLECTION",
            productDescription:"Natural Effect False Eyelashes Starter Kit",
            price: "₹ 1,500"
            
          },
          {
            image_url:
              "https://cdn15.nnnow.com/web-images/large/styles/KHFROVPTCI2/1599046960541/1.jpg",
            image2_url:
              "https://cdn14.nnnow.com/web-images/large/styles/KHFROVPTCI2/1599046960541/2.jpg",
            brandname: "OLAPLEX",
            productDescription:"Natural Effect False Eyelashes Starter Kit",
            price: "₹ 2,950"
            
          },

          {
            image_url:
              "https://cdn14.nnnow.com/web-images/large/styles/UT7V8IFK4QC/1583391378147/1.jpg",
            image2_url:
              "https://cdn01.nnnow.com/web-images/large/styles/UT7V8IFK4QC/1583391378145/2.jpg",
            brandname: "SEPHORA COLLECTION",
            productDescription:"False Eyelashes - Curl Your Lashes",
            price: "₹ 990"
            
          },

          {
            image_url:
              "https://cdn16.nnnow.com/web-images/large/styles/DRW0XVO6Z4W/1583388932304/1.jpg",
            image2_url:
              "https://cdn06.nnnow.com/web-images/large/styles/DRW0XVO6Z4W/1583388932301/2.jpg",
            brandname: "BENEFIT COSMETICS",
            productDescription:"Benetint Lip & Cheek Stain Mini - Rosel",
            price: "₹ 1,720"
            
          },
          {
            image_url:
              "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1533201155002/1.jpg",
            image2_url:
              "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1617175589724/2.jpg",
            brandname: "SEPHORA COLLECTION",
            productDescription:"Glow Perfection Foundation - 25 Beige",
            price: "₹ 1,690"
            
          },
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
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (

    <div style={{display:"flex", textAlign:"center"}}>
    <div style={{
        width:"86%",
        margin:"auto"
       
    }}>
<Carousel responsive={responsive} 
autoPlay={false}
autoPlaySpeed={50000}
>
    {makeupData.map((e,i)=>
    (
  <SliderDiv> 
    
    <img id='image1' width="78%" src={e.image_url} alt="" />
  <img id='image2' width="78%" src={e.image2_url} alt="" />
  
  
<div><div id="Scrollup">
<button><HiOutlineShoppingBag id="symbollcss"></HiOutlineShoppingBag>
                        <span id="textCSS">ADD TO CART</span></button>

                    <button><MdFavoriteBorder id="symbollcss"></MdFavoriteBorder>
                        <span id="textCSS">FAVOURITE</span></button>
                  </div></div>

<div style={{width:"90%"}} >
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
    
    
    

    
    </div>
  )
}