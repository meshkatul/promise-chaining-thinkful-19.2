const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function updateIfExists1(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
    .get(url)
    .then(() => {
      axios.put(url, body).then(({ data }) => {
        console.log(data);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}


function updateIfExists(id, body){
  const url = `${BASE_URL}/constellations/${id}`;

  return axios
    .get(url)
    .then(({data}) => {
      return data.id === id;
    })
    .then((exists) => {
      // if(!exists) return Promise.reject("id doesn't exist"); // or f(!exists) throw "not found";
      // return axios.put(url, body);
      if(exists) 
      return axios.put(url, body);
    })
    .then(({data}) => {
      return data;
    })
    .catch((error) => {
      return error.message;
    });
}

module.exports = {
  updateIfExists,
};
