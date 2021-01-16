import { API_URL } from "./env";
import axios from "axios";

class RecipeService {
    createRecipe(data) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const http = axios.create({ baseURL: API_URL, headers });
      return http.post("/api/recipe/recipes", data).catch((error) => {
        console.log(error);
        return false;
      });
    }
    createIngredient(data) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
      const http = axios.create({ baseURL: API_URL, headers });
      return http.post("/api/recipe/ingredients", data).catch((error) => {
        console.log(error);
        return false;
      });
    }
    createTag(data) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
      const http = axios.create({ baseURL: API_URL, headers });
      return http.post("/api/recipe/tags", data).catch((error) => {
        console.log(error);
        return false;
      });
    }
}

export const recipeService = new RecipeService();