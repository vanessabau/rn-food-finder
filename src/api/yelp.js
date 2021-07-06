import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer ",
  },
});

// To make a call we would use yelp.get('/search')
