import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID VHGpDRJ3q4VzardPkWM5c8GW_NxaTixjIee8bU8CGOM'
      }
});




