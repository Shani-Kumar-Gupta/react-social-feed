import React from 'react';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed';


export const TwitterFeed = () => {
    return (
        <>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="TATAAIGIndia"
                options={{height: 400}}
            />
        </>
    )
}

