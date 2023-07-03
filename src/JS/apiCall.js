import axios from 'axios';

async function apiCall(url, method, data) {
    // Create a new Axios request
    const request = axios({
      url,
      method,
      data,
    });
  
    // Await the response
    return (await request).data;
}

export {apiCall}