import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllTrainers() {
  return axios.get(`${path}/trainers`).then((response) => response.data);
}

export default getAllTrainers;
