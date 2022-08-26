import "./Nav.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";

export const Nav = () => {
  const z = JSON.parse(localStorage.getItem("user"));
  const handleName = () => {
    //  localStorage.clear();
    localStorage.removeItem("user");
    //  console.log('HI VIRAJ')
    window.location.reload();
  };
  return (
    <>
      <div className="NavbarContainer-1">
        <div className="Navbar-11">
          <div className="Navbar-12">
            <div className="Searchlogo">
              {" "}
              <FiSearch />{" "}
            </div>
            <input
              className="Navbar-13"
              type="text"
              placeholder="Search SEPHORA"
            />
          </div>
          <div className="Navbar-14">
            <div className="Navbar-15">SEPHORA</div>
          </div>
          <div className="Navbar-16">
            <div className="Navbar-17">
              <li>
                <FiHeart />
              </li>
              <li>|</li>
                <li>
              <Link to="/checkoutpage">
                  <HiOutlineShoppingBag />
              </Link>
                </li>
              <li>|</li>
              <Link to="/login">
                <span id="adjustment1">
                  <li>
                    <RiContactsLine />
                  </li>
                  <li style={{marginLeft:"5px"}}>{z === null ? "Login" : " "}</li>
                </span>
              </Link>
              <div>{z === null ? "" :z } </div>
              <div>{z===null ? "":<button onClick={handleName}>Logout</button>}</div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="NavbarContainer-2">
        <div className="header--left">
          <ul>
            <li className="nLinkv-hover ">
              {" "}
              <Link className="heading1" to="">
                SALE
              </Link>
            </li>
            <li className="nav-hover">
              <Link to="/mackupproduct" className="heading">
                MAKEUP
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  {/* <div>
                    <ul>
                      <li className="first">
                        <Link to="">FACE</Link>
                      </li>
                      <li className="active">
                        <Link to="">Foundation</Link>
                      </li>
                      <li className="active">
                        <Link to="">BB & CC Cream</Link>
                      </li>
                      <li className="active">
                        <Link to="">Concealer</Link>
                      </li>
                      <li className="active">
                        <Link to="">Face Primer</Link>
                      </li>
                      <li className="active">
                        <Link to="">Highlighter</Link>
                      </li>
                      <li className="active">
                        <Link to="">Makeup Palette</Link>
                      </li>
                      <li className="active">
                        <Link to="">Face Brushes</Link>
                      </li>
                    </ul>
                  </div> */}
                  <div>
                    {/* <h5>	EYE</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="/mackupproduct">EYE</Link>
                      </li>
                      <li>
                        <Link to="">Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to="">Mascara</Link>
                      </li>
                      <li>
                        <Link to="">Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="">Eyebrow</Link>
                      </li>
                      <li>
                        <Link to="">Eyeshadowr</Link>
                      </li>
                      <li>
                        <Link to="">Eye Primer</Link>
                      </li>
                      <li>
                        <Link to="">Eye Brushes</Link>
                      </li>
                      <li>
                        <Link to="">Contact Lenses</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>LIP</h5> */}
                    <ul>
                      <Link to="/mackupproduct">
                        <li className="first">
                          <Link to="">LIP</Link>
                        </li>
                        <li>
                          <Link to="">Lip Stain</Link>
                        </li>
                        <li>
                          <Link to="">Lipstick</Link>
                        </li>
                        <li>
                          <Link to="">Lip Gloss</Link>
                        </li>
                        <li>
                          <Link to="">Lip Liner</Link>
                        </li>
                        <li>
                          <Link to="">Lip Balm & Treatment</Link>
                        </li>
                        <li>
                          <Link to="">Lip Brushes </Link>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>CHEEK</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">CHEEK</Link>
                      </li>
                      <li>
                        <Link to="">Blush</Link>
                      </li>
                      <li>
                        <Link to="">Bronzer</Link>
                      </li>
                      <li>
                        <Link to="">Highlighter</Link>
                      </li>
                      <li>
                        <Link to="">Face Oils</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>NAIL MAKEUP</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">NAIL MAKEUP </Link>
                      </li>
                      <li>
                        <Link to="">Nail Polish</Link>
                      </li>
                      <li>
                        <Link to="">Nail Care</Link>
                      </li>
                      <li>
                        <Link to="">Highlighter</Link>
                      </li>
                      <li>
                        <Link to="">Manicure Tools</Link>
                      </li>
                      <li>
                        <Link to="">Pedicure Tools</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <Link className="heading" to="">
                SKINCARE
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  {/* <div> */}
                    {/* <h5>FACE</h5> */}
                    {/* <ul>
                      <li className="first">
                        <Link to="">FACE</Link>
                      </li>
                      <li className="active">
                        <Link to="">Foundation</Link>
                      </li>
                      <li className="active">
                        <Link to="">BB & CC Cream</Link>
                      </li>
                      <li className="active">
                        <Link to="">Concealer</Link>
                      </li>
                      <li className="active">
                        <Link to="">Face Primer</Link>
                      </li>
                      <li className="active">
                        <Link to="">Highlighter</Link>
                      </li>
                      <li className="active">
                        <Link to="">Makeup Palette</Link>
                      </li>
                      <li className="active">
                        <Link to="">Face Brushes</Link>
                      </li>
                    </ul>
                  </div> */}
                  <div>
                    <ul>
                      <li className="first">
                        <Link to="">EYE </Link>
                      </li>
                      <li>
                        <Link to="">Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to="">Mascara</Link>
                      </li>
                      <li>
                        <Link to="">Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="">Eyebrow</Link>
                      </li>
                      <li>
                        <Link to="">Eyeshadowr</Link>
                      </li>
                      <li>
                        <Link to="">Eye Primer</Link>
                      </li>
                      <li>
                        <Link to="">Eye Brushes</Link>
                      </li>
                      <li>
                        <Link to="">Contact Lenses</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>LIP</h5> */}
                    <ul>
                      <Link to={`/mackupproduct`}>
                        <li className="first">
                          <Link to="">LIP</Link>
                        </li>
                        <li>
                          <Link to="">Lip Stain</Link>
                        </li>
                        <li>
                          <Link to="">Lipstick</Link>
                        </li>
                        <li>
                          <Link to="">Lip Gloss</Link>
                        </li>
                        <li>
                          <Link to="">Lip Liner</Link>
                        </li>
                        <li>
                          <Link to="">Lip Balm & Treatment</Link>
                        </li>
                        <li>
                          <Link to="">Lip Brushes </Link>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>CHEEK</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">CHEEK </Link>
                      </li>
                      <li>
                        <Link to="">Blush</Link>
                      </li>
                      <li>
                        <Link to="">Bronzer</Link>
                      </li>
                      <li>
                        <Link to="">Highlighter</Link>
                      </li>
                      <li>
                        <Link to="">Face Oils</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h3>NAIL MAKEUP</h3> */}

                    <ul>
                      <li className="first">
                        <Link to="">NAIL MAKEUP </Link>
                      </li>
                      <li>
                        <Link to="">Nail Polish</Link>
                      </li>
                      <li>
                        <Link to="">Nail Care</Link>
                      </li>
                      <li>
                        <Link to="">Highlighter</Link>
                      </li>
                      <li>
                        <Link to="">Manicure Tools</Link>
                      </li>
                      <li>
                        <Link to="">Pedicure Tools</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <Link className="heading" to="">
                FRAGRANCE
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>WOMEN</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">WOMEN </Link>
                      </li>
                      <li>
                        <Link to="">Perfume</Link>
                      </li>
                      <li>
                        <Link to="">Mists and Deodorants</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>MEN</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">MEN </Link>
                      </li>
                      <li>
                        <Link to="">Perfume</Link>
                      </li>
                      <li>
                        <Link to="">Body Sprays & Deodorant</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <Link className="heading" to="">
                HAIRCARE
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>SHAMPOO & CONDITIONER</h5> */}
                    <ul>
                      <Link to="/hairproduct">
                        <li className="first">
                          <Link to="">SHAMPOO & CONDITIONER </Link>
                        </li>
                        <li>
                          <Link to="">Shampoo</Link>
                        </li>
                        <li>
                          <Link to="">Conditioner</Link>
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div>
                    {/* <h5>HAIR STYLING & TREATMENTS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">HAIR STYLING & TREATMENTS </Link>
                      </li>
                      <li>
                        <Link to="">Hair Spray & Styling Products</Link>
                      </li>
                      <li>
                        <Link to="">Hair Masks</Link>
                      </li>
                      <li>
                        <Link to="">Hair Clips</Link>
                      </li>
                      <li>
                        <Link to="">Hair Oil</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <Link className="heading" to="">
                TOOLS & BRUSHES
              </Link>
              <div className="hover">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>	BRUSHES</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">BRUSHES </Link>
                      </li>
                      <li>
                        <Link to="">Eye Brushes</Link>
                      </li>
                      <li>
                        <Link to="">Face Brushes</Link>
                      </li>
                      <li>
                        <Link to="">Lip Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>TOOLS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">TOOLS </Link>
                      </li>
                      <li>
                        <Link to="">Sponges & Applicators</Link>
                      </li>
                      <li>
                        <Link to="">Face Tools</Link>
                      </li>
                      <li>
                        <Link to="">Hair Clips</Link>
                      </li>
                      <li>
                        <Link to="">Sharpeners</Link>
                      </li>
                      <li>
                        <Link to="">Eyelash Curlers</Link>
                      </li>
                      <li>
                        <Link to="">Accessories</Link>
                      </li>
                      <li>
                        <Link to="">Brush Cleaners</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>VEGAN</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">VEGAN </Link>
                      </li>
                      <li>
                        <Link to="">Face Brushes</Link>
                      </li>
                      <li>
                        <Link to="">Eye Brushes</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <Link className="heading" to="">
                BRANDS
              </Link>
              <div className="hover">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>TOP MAKEUP BRANDS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">TOP MAKEUP BRANDS</Link>
                      </li>
                      <li>
                        <Link to="">Lancôme</Link>
                      </li>
                      <li>
                        <Link to="">Caudalie</Link>
                      </li>
                      <li>
                        <Link to="">Kora Organics</Link>
                      </li>
                      <li>
                        <Link to="">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="">Foreo</Link>
                      </li>
                      <li>
                        <Link to="">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="">Estee Lauder</Link>
                      </li>
                      <li>
                        <Link to="">Elizabeth Arden</Link>
                      </li>
                      <li>
                        <Link to="">Clarins</Link>
                      </li>
                      <li>
                        <Link to="">Gallinee</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>TOP FRAGRANCE BRANDS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to="">FRAGRANCE BRANDS</Link>
                      </li>
                      <li>
                        <Link to="">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="">Estee Lauder</Link>
                      </li>
                      <li>
                        <Link to="">Elizabeth Arden</Link>
                      </li>
                      <li>
                        <Link to="">Clarins</Link>
                      </li>
                      <li>
                        <Link to="">Gallinee</Link>
                      </li>
                      <li>
                        <Link to="">Lancôme</Link>
                      </li>
                      <li>
                        <Link to="">Caudalie</Link>
                      </li>
                      <li>
                        <Link to="">Kora Organics</Link>
                      </li>
                      <li>
                        <Link to="">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="">Foreo</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {" "}
                    <li className="first">
                      <Link to=""> BRANDS A-Z</Link>
                    </li>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
      {/* ///////////////////////////////// */}
    </>
  );
};