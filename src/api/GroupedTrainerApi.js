import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllGroupedTrainers() {
  return axios.get(`${path}/grouped-trainers`).then((response) => response.data);
}

export default getAllGroupedTrainers;
