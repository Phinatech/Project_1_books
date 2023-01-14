import React from 'react'
import styled from "styled-components"
import { BsFillImageFill } from "react-icons/bs";

const Uploads = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Circle>
            <BsFillImageFill />
            <span>Upload images</span>
          </Circle>

          <Input id="pix" type="file" />
          <Button htmlFor="pix">Upload Files</Button>

          <Imp placeholder="Enter Title" />
          <Textarea placeholder="Summary......" />
          <Imp placeholder="Author name" />

          <Select>
            <option>Romance</option>
            <option>Love</option>
            <option>Poem</option>
            <option>Fictions</option>
            <option>others..</option>
          </Select>
          <Button2>Submmit</Button2>
        </Card>
      </Wrapper>
    </Container>
  );
}

export default Uploads;


const Button2 = styled.button`
    height:40px;
    width:150px;
    background-color:silver;
    color:white;
    border:none;
    border-radius:5px;
    cursor: not-allowed;
    margin-top:10px;

    :hover{
        transform:scale(0.95)
    }

    @media screen and (max-width: 500px){
        width:120px;
    }
`
const Select = styled.select`
  width: 370px;
  height: 30px;
  border-radius: 3px;
  border:0.7px solid silver;
  outline-color: #f8cbe0;
`;

const Textarea = styled.textarea`
  width: 350px;
  height: 70px;
  border-radius: 3px;
  outline-color: #f8cbe0;
  padding-left: 10px;
  resize:none;
  border: 0.7px solid silver;
`;
const Imp = styled.input`
  width: 350px;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #f8cbe0;
  margin: 10px;
  padding-left:10px;
`;
const Button = styled.label`
width:200px;
height:40px;
background-color:#000;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
color:#fff;
transition:all 350ms;
cursor: pointer;

:hover{
    transform:scale(0.98)
}


`
const Input = styled.input`
display:none;
`
const Circle = styled.div`
    height:150px;
    width:250px;
    border-radius:5px;
    background-color:silver;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-bottom:10px;
    color:gray
`
const Card = styled.div`
  width: 600px;
  /* height: 300px; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  top: 0;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:10px;
`;
const Wrapper = styled.div``
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column

`