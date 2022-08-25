import {
  Box,
  Img,
  SimpleGrid,
  Text,
  Flex,
  Center,
  
} from "@chakra-ui/react";
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import {
  faLocationArrow,
  faStar,
  faDownload,
  faPenSquare,
  faHospitalSymbol,
} from "@fortawesome/fontawesome-free-solid";
import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";
import Carasoule from "../Carasoule";
// import { faLocationArrow, faStar,faDownload, faSquare, faPenSquare, faHospitalSymbol , faMap } from "@fortawesome/fontawesome-free-regular";

const links = [
  { path: "/sale", title: "SALE" },

  { path: "/makeup", title: "MAKEUP" },
  { path: "/skincare", title: "SKINCARE" },
  { path: "/fragrance", title: "FRAGRANCE" },
  { path: "/haircare", title: "HAIRCARE" },
  { path: "/tool&brushes", title: "TOOLS & BRUSHES" },
  { path: "/brands", title: "BRANDS" },
];
const Navbar = () => {
  return (
    <>
      <SimpleGrid>
        <Box>
          {/* <Box  display="flex" alignItems="center" bg="#F3F3F3" h='50px' w='100%'> */}
          <Flex bg="#F3F3F3" h="50px" w="100%">
            <Center>
              <Box marginLeft={"60px"}>
                <Img
                  w="80%"
                  h="66px"
                  src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
                  alt="img"
                />
              </Box>
            </Center>
            <Center marginRight={"180px"}>
              <Text>
                <FontAwesomeIcon icon={faLocationArrow} />
                STORE LOCATOR
              </Text>
            </Center>
            <Center>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <Text w="63%" marginLeft={"10px"} marginRight="10px">
                Get 10% OFF on your first purchase. Use Code: BEAUTY10
              </Text>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </Center>
            {/* </Box> */}
            <Center marginLeft={"40px"}>
              <FontAwesomeIcon icon={faDownload} /> <Text>Get App</Text>
            </Center>
            <Center marginLeft={"40px"}>
              <FontAwesomeIcon icon={faPenSquare} />
              <Text marginLeft={"5px"}>Track Order</Text>
            </Center>
            <Center marginLeft={"30px"}>
              <FontAwesomeIcon icon={faHospitalSymbol} />
              <Text>Loyalty</Text>
            </Center>
          </Flex>
          
        </Box>
        
      </SimpleGrid>
      <Nav/>
      {/* <Carasoule/> */}
    </>
  );
};

export default Navbar;
