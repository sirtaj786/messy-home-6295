import styled from "styled-components"
const SliderDiv = styled.div`
display: flex;
flex-direction: column;
margin-rigth:20%;
align-items: center;
justify-content:space-araound;
&:hover #Scrollup{
    bottom: 0;
    opacity: 1;
}
&:hover #image1{
    display: none;
   }
   &:hover #image2{
    display: block;
   }
`
export {SliderDiv}