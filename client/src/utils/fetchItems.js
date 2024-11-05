import axios from "axios";

const config = {
  headers: { Accept: "application/json", "Content-Type": "application/json" },
};

const fetchItems = async () => {
  const res = await axios
    .get(import.meta.env.VITE_API_ENDPOINT, config)
    .catch((err) => console.log(err));
  const data = await res.data;

  return data;
};

export { fetchItems };
