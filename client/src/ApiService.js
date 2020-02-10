import axios from "axios";

export default class ApiService {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:5000/api`,
      withCredentials: true
    });
  }

  getData = () => {
    return this.service.get(`/phones`).then(response => response.data);
  };

}
