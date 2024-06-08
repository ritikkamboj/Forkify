import { API_URL } from "./config.js";
import { getJson } from "./helpers.js";

export const state ={
    recipe :{},
    search :{
      query : ``,
      result : [],
    }
}

export const loadRecipe = async function(id)
{
    try{
      const data = await getJson(`${API_URL}${id}`);
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

 // Working on to implement search functionality 
 export const loadSearchResults = async function(query)
 {  
  try{
    state.search.query= query;

    const data = await getJson(`${API_URL}?search=${query}`);
    console.log(data);
    console.log(data.data.recipes);
    state.search.result = data ;
    state.search.result=data.data.recipes.map(rec =>{
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        sourceUrl: rec.source_url,
        image: rec.image_url,
  }
    } 
    ); 
    console.log(state.search);

  }
  catch(err)
  {
    console.log(`${err} in model.js `);
    throw err;

  }

 }
 loadSearchResults(`pizza`);


//  8: {publisher: "My Baking Addiction", image_url: "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg", title: "Pizza Dip", id: "664c8f193e7aa067e94e840d"}
