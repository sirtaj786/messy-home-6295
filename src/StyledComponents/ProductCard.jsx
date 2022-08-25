import styled from "styled-components";

const ProductCard = styled.div`
  width: 100%;
  &:hover #Scrollup_Button {
    bottom: 0;
    opacity: 1;
  }
  &:hover #productimg1 {
    display: none;
  }
  &:hover #productimg2 {
    display: block;
  }
`;

export { ProductCard };