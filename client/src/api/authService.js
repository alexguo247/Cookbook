import { API_URL } from "./env";
import axios from "axios";

class AuthService {
    register(data) {
        const http = axios.create({ baseURL: API_URL });
        return http.post("/api/user/create/", data).catch((error) => {
          console.log(error);
          return false;
        });
    }
  login(data) {
    const http = axios.create({ baseURL: API_URL });
    return http.post("/api/user/token/", data).catch((error) => {
      console.log(error);
      return false;
    });
  }
}

export const authService = new AuthService();