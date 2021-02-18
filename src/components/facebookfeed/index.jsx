import React from 'react';
import { FacebookProvider, Like, EmbeddedPost } from 'react-facebook';

const FacebookFeed = () => {
    return (
        <>
            <FacebookProvider appId="1234567">
                <EmbeddedPost href="https://www.facebook.com/TATAAIGINDIA/" width="500px" height="400px"/>
            </FacebookProvider>
        </>
    )
}

export default FacebookFeed;