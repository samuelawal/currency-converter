import { END_POINT } from "./constants";
const axios = require('axios').default;
export const fetchRates = async (base) => {

  const response = await axios.get(`${END_POINT}/${base}.json`);
  const returnedData = response.data
    return returnedData[base]
};
