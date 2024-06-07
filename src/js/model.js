import { API_URL } from "./config.js";
import { getJson } from "./helpers.js";

export const state ={
    recipe :{},
}

export const loadRecipe = async function(id)
{
    try{
      const data = await getJson(`${API_URL}/${id}`);
      console.log(data);
      console.log(data.data);
      console.log(data.data.recipe);
      
      let recipe = data.data.recipe;
      // let {recipe} = data.data;   this is the destructuring way 
  
  
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients
  
      };

      console.log(state.recipe);
    }catch(err)
    {
       console.log(`${err} in model.js `);
       throw err;
        
    }
   
   
 

    
}