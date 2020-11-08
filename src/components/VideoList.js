import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import VideoItem from './VideoItem.js'

const VideoList = ({ videos }) => {
    const renderedVideos = videos.map((video, id) => {
    return <VideoItem key={id} />
    });
    return (
        <div>
            {renderedVideos}
        </div>
    )
}

export default VideoList;