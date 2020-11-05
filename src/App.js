import React from 'react';

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
    this.ListeningStateChangedEvent({
      selectedVideo: video
    })
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
        q: termFromSearchBar
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
        <Container style={{ border: '2px solid blue'}} fluid>
          <Row>
            <Col style={{ border: '2px solid cyan'}}>
              <h1>Search bar</h1>
              {/* <SearchBar handleSumbit={this.handleSubmit}/> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} style={{ border: '2px solid yellowgreen'}}>
              <h2>VideoDetail</h2>
              {/* <VideoDetail video={selectedVideo}/> */}
            </Col>
            <Col xs={12} md={4} style={{ border: '2px solid pink'}}>
              <h2>VideoList</h2>
              {/* <VideoList videos={videos} handleVideoSelect={this.handleVideoSelect}/> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}

export default App;

