import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllGroups() {
  return axios.get(`${path}/groups`).then((response) => response.data);
}

export default getAllGroups;
