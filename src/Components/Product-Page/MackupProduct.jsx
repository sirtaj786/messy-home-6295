import { useEffect, useState } from "react";
import { ProductCard } from "../../StyledComponents/ProductCard";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import "./MainBody.css";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
// import { Header } from "../Header/Header";
// import { Navbar } from "../Navbar/Navbar";
// import { Footer } from "../Footer/Footer";

export const MackupProduct = () => {
  const [product, setproduct] = useState([]);
  const [brandfilter, setBrandFilter] = useState("ALL");
  const [priceRane, setPriceRange] = useState("0-10000");

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`https://sephoramasaiapi.herokuapp.com/mackupp`)
      .then((d) => d.json())
      .then((data) => {
        setproduct(data);
      });
  };
  const handelSort = (by) => {
    if (by == "PLH") {
      let sorted = product.sort((a, b) => {
        return a.price - b.price;
      });

      let newData = [...sorted];
      setproduct(newData);
    } else if (by == "PHL") {
      let sorted = product.sort((a, b) => {
        return b.price - a.price;
      });
      let newData = [...sorted];
      setproduct(newData);
    } else if (by == "POP") {
      getdata();
    }
  };

  const dobrandFilter = (product) => {
    if (brandfilter == "ALL") {
      return true;
    } else {
      if (brandfilter === product.brandname) {
        return true;
      }
    }
  };

  const priceRaneFilter = (product) => {
    if (priceRane === "0-10000") {
      return true;
    } else if (priceRane === "0-1000") {
      if (product.price >= 0 && product.price <= 1000) {
        return true;
      }
    } else if (priceRane === "1001-2000") {
      if (product.price >= 1001 && product.price <= 2000) {
        return true;
      }
    } else if (priceRane === "2001-3000") {
      if (product.price >= 2001 && product.price <= 3000) {
        return true;
      }
    } else if (priceRane === "3001-4000") {
      if (product.price >= 3001 && product.price <= 4000) {
        return true;
      }
    } else if (priceRane === "4001-5000") {
      if (product.price >= 4001 && product.price <= 5000) {
        return true;
      }
    } else if (priceRane === "5001-6000") {
      if (product.price >= 5001 && product.price <= 6000) {
        return true;
      }
    } else if (priceRane === "6001-10000") {
      if (product.price >= 6001 && product.price <= 10000) {
        return true;
      }
    }
  };

  return (
    <>
    {/* <Header/>
    <Navbar/> */}
      <div id="sortdiv">
        <p>SORT:</p>
        <select
          id="itemsorter"
          onChange={(e) => {
            handelSort(e.target.value);
          }}
        >
          <option value="POP">Sort</option>
          <option value="PLH">Price:Low to High</option>
          <option value="PHL">Price:High to Low</option>
          <option value="POP">Popularity</option>
        </select>
      </div>

      <div id="MainContainer">
        <div id="leftNavigation">
          <div id="leftNav">
            <b className="navcat">CATEGORY</b>

            <div id="checkboxcss">
              <div id="ckeckboxdiv">
                <input type="checkbox" id="bye" />
                <span>Perfume (294)</span>
              </div>
              <div id="ckeckboxdiv">
                <input type="checkbox" />
                <span>Deodorant (6)</span>
              </div>
            </div>
            <div id="checkboxcss">
              <div id="ckeckboxdiv">
                <input type="checkbox" />
                <span>New Arrivals (7)</span>
              </div>
              <div id="ckeckboxdiv">
                <input type="checkbox" />
                <span>On Sale (22)</span>
              </div>
            </div>

            <p className="navfilter">FILTER BY</p>
            <select
              id="s1"
              onChange={(e) => {
                setBrandFilter(e.target.value);
              }}
            >
              <option value="ALL">BRAND</option>
              <option value="WESTMAN ATELIER">WESTMAN ATELIER</option>
              <option value="ILIA">ILIA</option>
              <option value="KJAER WEIS">KJAER WEIS</option>
              <option value="TOWER 28">TOWER 28</option>
              <option value="JONES ROAD">JONES ROAD</option>
              <option value="LILY LOLO">LILY LOLO</option>
            </select>
            <select
              id="s1"
              onChange={(e) => {
                setPriceRange(e.target.value);
              }}
            >
              <option value="0-10000">PRICE</option>
              <option value="0-1000">0 to 1000</option>
              <option value="1001-2000">1001 to 2000</option>
              <option value="2001-3000">2001 to 3000</option>
              <option value="3001-4000">3001 to 4000</option>
              <option value="4001-5000">4001 to 5001</option>
              <option value="5001-6000">5001 to 6000</option>
              <option value="6001-10000">5001 & Above</option>
            </select>
            <div id="btn">
              <button>
                <span>Size</span>
                <b></b>
              </button>
              <button>
                <span>Color</span>
                <b></b>
              </button>
              <button>
                <span>Promotion</span>
                <b></b>
              </button>
              <button>
                <span>Store</span>
                <b></b>
              </button>
            </div>
          </div>
        </div>
        {product.length==0 ? <h1 style={{color:"grey", marginLeft: "150px"}}>
         Please Wait ...
              </h1> :
        //  <SimpleGrid columns={[1,2,3,4]}>
        <div id="productpagecart">
          {product
            .filter(dobrandFilter)
            .filter(priceRaneFilter)
            .map((e) => (
              <div
                id="productCard"
                key={e.productName}
                onClick={() => {
                  let arr=[]
                  arr.push(e)
                  localStorage.setItem("srk", JSON.stringify(arr));
                }}
              >

                <ProductCard Product={product}>
                  <div id="imgDiv">
                  <Link to="/productdetail">
                    <img src={e.image_url} id="productimg1" />
                    <img src={e.image2_url} id="productimg2" />
                    </Link>
                    <div id="Scrollup_Button">
                      <button
                        onClick={(event) => {
                          alert('added in cart')

                          var cartArr =
                            JSON.parse(localStorage.getItem("srk")) ||
                            [];
                          cartArr.push(e);
                          localStorage.setItem(
                            "srk",
                            JSON.stringify(cartArr)
                          );
                        }}
                      >
                        <HiOutlineShoppingBag id="symbollcss"></HiOutlineShoppingBag>
                        <span id="textCSS">ADD TO CART</span>
                      </button>
                      <button
                        // onClick={(event) => {
                        //   var wishlistArr =
                        //     JSON.parse(
                        //       localStorage.getItem("sephorawishlist")
                        //     ) || [];
                        //   wishlistArr.push(e);
                        //   localStorage.setItem(
                        //     "sephorawishlist",
                        //     JSON.stringify(wishlistArr)
                        //   );
                        // }}
                      >
                        <MdFavoriteBorder id="symbollcss"></MdFavoriteBorder>
                        <span id="textCSS">FAVOURITE</span>
                      </button>
                    </div>
                  </div>
                  <Link to="/productdetail" style={{textDecoration: "none"}}>
                  <div id="textDiv">
                    <p>{e.brandname}</p>
                    <p>{e.productName}</p>
                    <p>₹ {e.price}</p>
                  </div>
                  </Link>
                </ProductCard>
              </div>
            ))}
            
        </div> 
        
        }
        
      </div>
      
      {/* <Footer/> */}
    </>
  );
};