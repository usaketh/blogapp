import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import CollapsedPost from '../components/CollapsedPost';
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


const Header = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  height: 60px;
  justify-content: space-around;
  margin-bottom: 20px;
`
const Heading = styled.div`
  font-size: 30px;
  padding: 10px;
`
const SearchImage = styled.img`
  height: 33px;
  width: 33px;
  margin-top: 10px;
  cursor: pointer;
`;

const RightComponent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavBar = styled.nav``;

const NavBarElement = styled.a`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: underline;
  color: white;
  margin-right: 30px;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostText = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  top: 35%;
  position: absolute;
  left: 20px;
  transform: translateY(-50%);
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  z-index: 1;
  width: 50%;
`
const PostImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const RootLayout = () => {
  const [signup, setSignup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if(signup){
        navigate('signup');
    }
    
  },[signup, navigate]);
    
  return (
       <Container>
            <Header>
            <Button variant="text" size='medium'>Subscribe</Button>
            <Heading>Blog</Heading>
            <RightComponent>
            <SearchImage src="/search-icon.svg"/>
                <Button 
                    sx={{height: 40, width: 100, marginTop: 1, marginLeft: 1}} 
                    variant="contained"
                    size='small'
                    onClick={() => setSignup(true)}
                >
                Signup
                </Button>
            </RightComponent>
            </Header>
            <NavBar>
            <NavBarElement href='#'>Technology</NavBarElement>
            <NavBarElement href='#'>Design</NavBarElement>
            <NavBarElement href='#'>Culture</NavBarElement>
            <NavBarElement href='#'>Business</NavBarElement>
            <NavBarElement href='#'>Politics</NavBarElement>
            <NavBarElement href='#'>Opinion</NavBarElement>
            <NavBarElement href='#'>Science</NavBarElement>
            <NavBarElement href='#'>Health</NavBarElement>
            <NavBarElement href='#'>Style</NavBarElement>
            <NavBarElement href='#'>Travel</NavBarElement>
            </NavBar>
            
            
            <Outlet/>
        </Container>
    
  )
}

export default RootLayout