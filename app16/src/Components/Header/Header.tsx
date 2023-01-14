import React from 'react'
import styled from 'styled-components'
import logo from "../Assests/bookLogo.jpg"
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Text>
        <Logo src={logo} />
        <span>BookStores</span>
      </Text>

      <NavHold>
        <Search>
          <AiOutlineSearch />
        </Search>
        <Link to="/uploads">
          {" "}
          <Button>Upload books</Button>
        </Link>
      </NavHold>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;
const Logo = styled.img`
height:35px;


@media screen and (max-width: 500px){
    height:25px;
}
`
const NavHold = styled.div`
  display: flex;
  margin-right: 50px;
  align-items: center;

 @media screen  and  (max-width: 500px){
    margin-right:20px;
    
 }
`;
const Search = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: silver;

  @media screen and (max-width: 500px) {
    display:none;
  }
`;
const Button = styled.button`
  height: 40px;
  width: 150px;
  background-color: #f082ac;
  border: none;
  color: white;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    transform: scale(0.95);
  }

  @media screen and (max-width:500px) {
    width:120px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }

  span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;

    @media screen and (max-width: 500px) {
      font-size: 15px;
    }
  }
`;