import React from 'react'
import styled from 'styled-components'

const Singlebooks = () => {
  return (
    <Container>
      <Wrapper>
        <Bottom>
          <Hold>
            <AuthorImage>P</AuthorImage>
            <Authorname>Judith Ugbo</Authorname>
          </Hold>
          <View></View>
        </Bottom>
        <MainImage/>
        <h2>Hello world</h2>
        <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque est magni, harum delectus modi deleniti reiciendis soluta ea minima numquam facilis pariatur nulla deserunt. Ullam est ab, ut aliquid eum ipsa voluptatibus, laudantium quam quos cupiditate praesentium explicabo voluptatum sequi nisi corporis exercitationem voluptate minima similique libero modi repellendus qui?</Desc>
      </Wrapper>
    </Container>
  );
}

export default Singlebooks

const MainImage = styled.img`
width:90%;
height:500px;
background-color:silver;
`
const Desc = styled.div``
const Wrapper = styled.div`
width:90%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:left;
`
const View = styled.div`
 
`;
const Authorname = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #043842ed;
`;
const AuthorImage = styled.div`
  padding: 15px 20px;
  background-color: red;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:20px;
`;
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
`