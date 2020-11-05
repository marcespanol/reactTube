import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snipet',
        maxResults: 5,
        key: 'AIzaSyAq6w4wrr98uQSc_qJPn2DQKAsL99ond-c'
    }
});
