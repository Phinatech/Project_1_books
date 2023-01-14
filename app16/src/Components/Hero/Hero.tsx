import React from 'react'
import styled from "styled-components"
import GlobalButton from './GlobalButton';
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <Container>
      <Video
        autoPlay
        loop
        playsInline
        muted
        src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"
      />

      <Content>
        <ButtonHold>
          <GlobalButton text="Animation" br="50px" />
          <GlobalButton text="Branding" br="50px" />
          <GlobalButton text="Branding" br="50px" />
          <GlobalButton text="Illustration" br="50px" />
          <GlobalButton text="print" br="50px" />
          <GlobalButton text="Product Design" br="50px" />
        </ButtonHold>

        <h2>Explore the world’s leading design portfolios</h2>
        <p>
          Millions of designers and agencies around the world showcase their
          portfolio work on Dribbble - the home to the world’s best design and
          creative professionals.
        </p>

        <InputHold>
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Input placeholder="Enter your search word" />
        </InputHold>
      </Content>
    </Container>
  );
}

export default Hero
const Input = styled.input`
background-color:transparent;
border:none;
outline:none;
flex:1;
`
const InputHold = styled.div`
display:flex;
align-items:center;
height:50px;
width:350px;
background-color:#fff;
color:black;
border-radius:25px;

@media screen and (max-width: 330px) {
  width:300px;
}
`
const Icon  = styled.div`
margin-left:10px;
margin-right:10px;
`
const Button = styled.button``
const ButtonHold = styled.div`
    margin-top:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow-x:scroll;
    width:100%;
    ::-webkit-scrollbar{
      width:0;
    }
   

    @media screen and (max-width: 500px){
      justify-content:flex-start;
      align-items:flex-start
    }
`
const Content = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    color:white;
    display:flex;
    /* justify-content:center; */
    flex-direction:column;
    align-items:center;
    text-align:center;

    h2{
      font-size:30px;
      margin:0;
    }
    
    p{
      width:600px;
      font-size:20px;

      @media screen and (max-width: 320px) {
        width:280px;
      
    }
      @media screen and (min-width: 330px)and (max-width: 600px) {
        width:300px;
      
    }
    }
`
const Video = styled.video`
    height:100%;
    width:100%;
    object-fit:cover;
`
const Container = styled.div`
  width: 100%;
  height: 550px;
  display:flex;
   position: relative;

  :before{
    content:"";
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.8);
    position:absolute;
  }
`;