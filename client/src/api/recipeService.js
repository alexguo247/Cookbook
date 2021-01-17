import { API_URL } from "./env";
import axios from "axios";

class RecipeService {
    createRecipe(data) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      };
      const http = axios.create({ baseURL: API_URL, headers });
      return http.post("/api/recipe/recipes/", data).catch((error) => {
        console.log(error);
        return false;
      });
    }
    createIngredient(data) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      }
      const http = axios.create({ baseURL: API_URL, headers });
      return http.post("/api/recipe/ingredients/", data).catch((error) => {
        console.log(error);
        return false;
      });
    }
    createTag(data) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      }
      const http = axios.create({ baseURL: API_URL, headers });
      return http.post("/api/recipe/tags/", data).catch((error) => {
        console.log(error);
        return false;
      });
    }
    getRecipes(id) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      };
      const http = axios.create({
        baseURL: API_URL,
        headers,
      });
      return http.get(`/api/recipe/recipes/${id}/`).catch((error) => {
        console.log(error);
        return false;
      });
    }
    getIngredients() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      };
      const http = axios.create({
        baseURL: API_URL,
        headers,
      });
      return http.get(`/api/recipe/ingredients/`).catch((error) => {
        console.log(error);
        return false;
      });
    }
    getTags() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      };
      const http = axios.create({
        baseURL: API_URL,
        headers,
      });
      return http.get(`/api/recipe/tags/`).catch((error) => {
        console.log(error);
        return false;
      });
    }
    uploadImage(data, id) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
      const http = axios.create({
        baseURL: API_URL,
        headers,
      });
      return http.post(`/api/recipe/recipes/${id}/upload-image`).catch((error) => {
        console.log(error);
        return false;
      });
    }
}

export const recipeService = new RecipeService();