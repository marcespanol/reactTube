import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import VideoItem from './VideoItem.js'
import Container from 'react-bootstrap/Container';

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video, id) => {
    return <VideoItem handleVideoSelect={handleVideoSelect} key={id} video={video} />
    });
    return (
        <Container style={{padding: '10px', marginTop: '10px'}}>
            {renderedVideos}
        </Container>
    )
}

export default VideoList;