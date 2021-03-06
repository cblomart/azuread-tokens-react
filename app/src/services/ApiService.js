import axios from 'axios';

export default class ApiService {

    fetchData = (endpoint, accessToken) => {
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        return axios.get(endpoint, config).then(
          (apiResponse) => {
            return JSON.stringify(apiResponse.data, undefined, 4);
          }
        );
      }
}