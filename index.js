const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//enviroment variables
const PORT = process.env.PORT || 8080;

const fetchData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

app.get("/api", async (req, res) => {
  const data = await fetchData();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
