import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllGroupedTrainees() {
  return axios.get(`${path}/grouped-trainees`).then((response) => response.data);
}

export default getAllGroupedTrainees;
