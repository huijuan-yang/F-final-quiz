import axios from 'axios';

const path = 'http://localhost:8080/';

function getAllUngroupedTrainees() {
  return axios.get(`${path}/ungrouped-trainees`).then((response) => response.data);
}

export default getAllUngroupedTrainees;
