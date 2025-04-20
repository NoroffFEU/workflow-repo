import { apiService } from "../../apiService.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { updateMainHeading } from "../../ui/common/updateMainHeading.js";
import { updateTitle } from "../../ui/common/updateTitle.js";
import { renderRecipe } from "./renderRecipe.js";
import { getQueryParam } from "../../utils/getQueryParam.js";

export async function displayRecipe() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }
  const container = document.querySelector("#recipe-container");

  try {
    const recipe = await apiService.getRecipeById(id);
    const { data } = recipe;
    updateMainHeading(data.name);
    updateTitle(data.name);
    renderRecipe(container, data);
  } catch (error) {
    console.log(error);
    displayMessage(container, "error", error.message);
  }
}
