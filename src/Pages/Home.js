import React from 'react';
import { useState } from 'react';
import CollapsedPost from '../components/CollapsedPost';
import { v4 as uuidv4 } from 'uuid';
import Create from './Create';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Money doesn't buy happiness", blog: "While money can provide comfort and ease in life, it doesn't guarantee happiness. True happiness often stems from meaningful relationships, personal fulfillment, and a sense of purpose. ."},
        {title: "Sex doesn't buy happiness", blog: "While sex can be a pleasurable and intimate experience, it doesn't inherently bring lasting happiness."},
        {title: "My sad story", blog: "In the midst of heartbreak, my story unfolds—a journey marked by the bittersweet symphony of love and loss. Each chapter echoes with the haunting melody of shattered dreams and unfulfilled promises. ."},
        {title: "Lost in the Echoes of Regret", blog: "Amidst the backdrop of a fading sunset, memories of lost love linger like shadows in the twilight. In this tale of heartache, a journey unfolds through the labyrinth of regret, where every step is haunted by the echoes of what could have been."},
        {title: "Whispers of Love, Tears of Farewell", blog: "In a world where love is as fragile as glass, two souls once intertwined now drift apart like ships in the night. "},
        {title: "Fragments of a Broken Heart", blog: "In the shattered remnants of a once-vibrant love story, fragments of a broken heart lay strewn across the landscape of memory. "}
    ]);

    const handleAddPost = (newPost) => {
        setBlogs([...blogs, newPost]);
        console.log(blogs)
    }



    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    blogs.map((post) => {
                        return <CollapsedPost title={post.title} blog={post.blog} key={uuidv4()}/>

                    })
                }
            </div>
            <Create onAddPost={handleAddPost}/>

        </>
        
  )
}

export default Home