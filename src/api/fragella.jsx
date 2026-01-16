import axios from "axios";

const BASE_URL = "https://api.fragella.com/api/v1/";

export  const fragella = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": "3bf60c830a81bc5e47d07a9d82d86e1c303560a1675367882c3c6cf3e7131c7d",
  },
});

 
