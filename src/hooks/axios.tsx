import axios from "axios";

const baseURL = "https://aura-api.vercel.app/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkYmRiYzljLWNiYzktNDVhZi04ODcwLTgzMTRjYjA4NzkxYSIsInJvbGVzIjpbIk1PREVSQVRPUiIsIkFETUlOIiwiVVNFUiJdLCJuYW1lIjoiQXVyYSIsImlhdCI6MTcwODY1NzgxMiwiZXhwIjoxNzA4ODMwNjEyfQ.3Smh2fnt1aDeBsgh0GVM8xXAwr0QNN_eBInbdDZ6kj4";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});
