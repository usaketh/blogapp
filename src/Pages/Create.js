import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const PostContainer = styled.div`
  width: 1150px;
  height: 500px;
  margin-top: 10px;
  padding-left: 24px;
  padding-right: 24px;
  // box-sizing: border-box;
  display: block;
  position: relative;
  cursor: pointer;
  border-radius: 50px;

`;

const Create = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  
  return (
    <PostContainer>
        <h3>Create your blog</h3>
        <TextField  fullWidth label="Title" color="secondary" focused value={title} onChange={handleTitleChange}/>
        <br/>
        <br/>
        <textarea 
            placeholder='Write your article here...' 
            rows={20} cols={100}
            style={{
                padding: '10px', 
                fontSize: '16px', 
                border: '1px solid #ccc',
                borderRadius: '5px',
                outline: 'none' 
            }}
            value={content}
            
          >
          </textarea>
          <br/>
          <Button variant="contained" >Post</Button>
      </PostContainer>
  )
}

export default Create