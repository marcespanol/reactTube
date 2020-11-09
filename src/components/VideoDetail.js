import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

const VideoDetail = ({ video }) => {
    if(!video) return <div>Search something...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <Container style={{height: '60%', marginTop: '20px'}}>
            <Row style={{height: '100%'}}>
                <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc}/>
            </Row>
            <Row>
                <h2 style={{marginTop: '20px'}}>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </Row>
        </Container>
    )
}

export default VideoDetail;