import React from 'react';
import styled from 'styled-components';


const Flex = styled.div`
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   align-content: space-around;
   margin: 1rem 1.5rem 1rem 1.5rem;
   background-color:white;
   opacity: 0.7;

`;



const Color = styled.h1`
   font-family: 'audiowide';
   font-weight: 'bold';
   color:#4141D8;
   font-size:3rem;
   background-color:yellow;
   color: blue;

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }
`;

const Size = styled.h3`
   font-size:2rem;
`;






export const StarInfo = (props) => {

       return (
         <Flex>
             <Color>{props.name}</Color>
             <Size>Gender: {props.gender}</Size>
             <Size>Height: {props.height}</Size>
             <Size>Eye Color: {props.eyes}</Size>

         </Flex>


       )

}

export default StarInfo;
