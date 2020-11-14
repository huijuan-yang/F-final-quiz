import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllMembers() {
  return axios.get(`${path}/members`).then((response) => response.data);
}

export default getAllMembers;
