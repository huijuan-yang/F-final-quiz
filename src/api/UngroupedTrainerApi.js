import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllUngroupedTrainers() {
  return axios.get(`${path}/ungrouped-trainers`).then((response) => response.data);
}

export default getAllUngroupedTrainers;
