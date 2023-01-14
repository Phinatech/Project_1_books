import React, { useState } from 'react'
import styled from 'styled-components'
import pic from "../Assests/cardImg.webp"
import axios from "axios"
import { AiOutlineEye } from "react-icons/ai";
import {Link} from "react-router-dom"
interface MyData {
  _id: string;
  author: string;
  authorImg: string;
  category: string;
  coverImage: string;
  title: string;
  views: string[];
  summary: string;
}

interface Iprops {
  serachData : MyData[];
  setSearchData:React.Dispatch<React.SetStateAction<MyData[]>>
}




const BookList:React.FC<Iprops> = ({serachData,setSearchData}) => {

const [bookData,setBookData] = useState<MyData[]>([])
const [isLoading, setIsLoading]= useState(true);
const [ipState,setIpstate] = useState("");


const fetchData =async () => {
await axios
  .get("http://localhost:4000/server/gettingbooks")
  .then((res) => {
    setIsLoading(false)
    setBookData(res.data.data)
  })

  .catch((err)=>{
    console.log(err);
    return err;
  })
};

const ReadIpAddress =async () => {
  await axios.get(
    "https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce"
  )
  .then((res)=>{
    setIpstate(res.data)
  })
  .catch((err)=>{
    console.log(err);
  })
}

const Storeviews =async () => {
  await axios 
  .patch(`http://localhost:4000/server/views${id}`,{
    ip:ipState,
  })
  .then((res)=>{
    console.log(res);
  });
};

React.useEffect(()=>{
  ReadIpAddress()
  fetchData();
},[])

  return (
    <Container>
      {isLoading ? <p>Loading....</p>:null}
     {serachData?.length >= 1 ? (

       
        {searchData?.map((props) => (
          <Link 
            style = {{"textDecoration":"none"}} 
          to={`/bookData/${props._id}/details`}>
          <Card key={props._id}>
            <ImageHolder>
              <Img src={pic} />
              <Cont>
                <Button>Tragedy</Button>

                <Titlehold>
                  <Title>Life is a yam</Title>
                </Titlehold>
              </Cont>
            </ImageHolder>

            <Bottom>
              <Hold>
                <AuthorImage>P</AuthorImage>
                <Authorname>Judith Ugbo</Authorname>
              </Hold>
              <ViewIcons>
                <AiOutlineEye />
                <span>0</span>
              </ViewIcons>

              <Hovercard>
                <First>
                  <Hold>
                    <AuthorImage>P</AuthorImage>
                    <Authorname>Judith Ugbo</Authorname>
                  </Hold>
                </First>

                <View>+ View</View>
                <Last>
                  <MainImage />
                  <MainImage />
                  <MainImage />
                  <MainImage />
                </Last>
              </Hovercard>
            </Bottom>
          </Card>
        ))}
      </Link>):()}
    </Container>
  );
}

export default BookList
const First = styled.div`
display: flex;
`

const ViewIcons = styled.div`
display:flex;
color:gray;
align-items:center;

span{
  color:black;
}
`
const Hovercard = styled.div`
  height: 150px;
  width: 300px;
  
  position: absolute;
  top: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  border-radius:5px;
  
`;
const MainImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  background-color: gray;

  margin-right: 5px;
  object-fit: cover;
`;
const Last = styled.div`

`
const View = styled.div`
padding:7px 20px;
background-color:silver;
border-radius:5px;
display:flex;


`
const Authorname = styled.div`
font-weight:bold;
`
const AuthorImage = styled.div`
padding:15px 20px;
background-color:#bb3d6e;
border-radius:50%;
margin-right:10px;
font-size:16px;
font-weight:bold;
color:white;
`
const Hold = styled.div`
display:flex;
align-items:center;
width: 100%;
cursor: pointer;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
margin-top: 10px;
`
const Title = styled.div`
display:flex;
position:absolute;
bottom:10px;
margin-left:10px;
font-size:18px;
color:white;
`
const Titlehold = styled.div`
  /* background-color: yellow; */
  height: 145px;
  opacity: 0;
  display: flex;
  transition: all 350ms;
  border-radius: 5px;
  background: linear-gradient(
    0deg,
    rgba(4, 8, 8, 1) 0%,
    rgba(9, 7, 4, 1) 0%,
    rgba(9, 7, 4, 0) 100%
  );

  :hover {
    opacity: 1;
  }
`;
const Button = styled.div`
  margin: 10px;
  background-color: #302f3e;
  width:130px;
  height:35px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-weight:bold;
  border-radius:20px;
`;
const Cont = styled.div`
position: absolute;
height:200px;
width:100%;

/* background-color:red; */
top:0;
`
const Img = styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
    border-radius: 5px;
`
const ImageHolder = styled.div`
  height: 200px;
  width: 100%;
  background-color: silver;
  position: relative;
  border-radius: 5px;

  :hover {
  }
`;
const Card = styled.div`
  margin: 20px;
  width: 300px;
/* width: 100%; */
  /* position: relative; */
  /* border-radius: 10px; */
  /* background-color: red; */
`;
const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 30px;
`;