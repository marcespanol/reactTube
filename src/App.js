import React from 'react';

import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js';
import VideoDetail from './components/VideoDetail.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

import youtube from './apis/youtube.js';

class App extends React.Component {
  state = {
    videos: [],
    selectVideo: null,
  }

  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyAq6w4wrr98uQSc_qJPn2DQKAsL99ond-c',
          q: termFromSearchBar,
      }
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  render (){
    const { selectedVideo, videos } = this.state;
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <SearchBar onSubmit={this.handleSubmit}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <VideoDetail video={selectedVideo}/>
            </Col>
            <Col xs={12} md={4} style={{ padding: '0px' }}>
              <VideoList videos={videos} handleVideoSelect={this.handleVideoSelect}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}

export default App;

