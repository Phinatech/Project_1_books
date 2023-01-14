import React from 'react'
import styled from 'styled-components'

interface iprops{
    text :string
    br:string
}

const GlobalButton:React.FC<iprops> = ({text,br}) => {
  return (
   <Button br={br}>{text}</Button>
  )
}

export default GlobalButton;

const Button = styled.button<{br:string}>`
 padding:20px 30px;
  background-color: #f082ac;
  border: none;
  color: white;
  border-radius: ${({br})=> br};
  transition: all 350ms;
  cursor: pointer;
  outline:none;
  margin:5px;

  :hover {
    transform: scale(0.95);
  }
`;
