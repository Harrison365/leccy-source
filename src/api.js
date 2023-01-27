import axios from "axios";

const url = "https://api.carbonintensity.org.uk";

export const fetchCountry = (country) => {
  return axios
    .get(`${url}/regional/${country}`)
    .then((res) => {
      const data = res.data.data[0].data[0].generationmix;
      const sorted = data.sort((a, b) => b.perc - a.perc);
      return sorted;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const fetchUk = () => {
  return axios
    .get(`${url}/generation`)
    .then((res) => {
      const data = res.data.data.generationmix;
      const sorted = data.sort((a, b) => b.perc - a.perc);
      return sorted;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const fetchPostcode = (postcode) => {
  let firstThree = postcode.slice(0, 3).toUpperCase();
  if (firstThree === "SW1") {
    firstThree = "SW1A";
  }
  return axios
    .get(`${url}/regional/postcode/${firstThree}`)
    .then((res) => {
      const data = res.data.data[0].data[0].generationmix;
      const sorted = data.sort((a, b) => b.perc - a.perc);
      return sorted;
    })
    .catch((err) => {
      console.log(err);
    });
};
