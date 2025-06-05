import axios from "axios";

export const getPhotos = async (query = "", page = 1) => {
  const { data } = await axios.get("https://api.pexels.com/v1/search", {
    headers: {
      Authorization: "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74",
    },
    params: {
      query,
      page,
      per_page: 10,
    },
  });
  return data;
};
