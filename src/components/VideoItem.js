import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VideoItem = ({ video }) => {
    return(
        <Container>
            <Row style={{marginBottom: '20px'}}>
                <Col xs={6}>
                    <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" style={{width: '100%'}}/>
                </Col>
                <Col xs={6}>
                    <h6 style={{textAlign: 'left'}}>{video.snippet.title}</h6>
                </Col>
            </Row>
            <hr style={{borderTop: '1px solid #ccc'}}></hr>
        </Container>
    )
}

export default VideoItem;