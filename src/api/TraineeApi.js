import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllTrainees() {
  return axios.get(`${path}/trainees`).then((response) => response.data);
}

export default getAllTrainees;
