import styled from '@emotion/styled';
import React from 'react'

const StyledCollapsedPost = styled.div`
  width: 550px;
  height: 250px;
  background-color: red;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease; /* Add a transition for the transform property */
  
  &:hover {
    transform: scale(1.1); /* Scale up the size by 10% when hovered over */
  }
`;

// Define the functional component
const CollapsedPost = ({ title, blog }) => {
  return (
    <StyledCollapsedPost>
        <h2>{title}</h2>
        <p>{blog}</p>
    </StyledCollapsedPost>
  );
}

export default CollapsedPost