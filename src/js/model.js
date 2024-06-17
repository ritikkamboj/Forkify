import { API_URL,RES_PER_PAGE } from "./config.js";
import { getJson } from "./helpers.js";

export const state ={
    recipe :{},
    search :{
      query : ``,
      result : [],
      page:1,
      resultPerPage : RES_PER_PAGE,
    },
    bookmarks: []
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
      if(state.bookmarks.some(bookmark => bookmark.id === id ))
        state.recipe.bookmarked = true ;
      else state.recipe.bookmarked = false;

      console.log(state);
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
    state.search.page =1;
    console.log(state.search);
    console.log(state.recipe);

  }
  catch(err)
  {
    console.log(`${err} in model.js `);
    throw err;

  }

 }

 export const getSearchResultsPage = function(page= state.search.page){
  state.search.page=page;

  const start =(page-1)*state.search.resultPerPage;
  const end =page*state.search.resultPerPage;
  return state.search.result.slice(start,end);
 }
//  loadSearchResults(`pizza`);


//  8: {publisher: "My Baking Addiction", image_url: "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg", title: "Pizza Dip", id: "664c8f193e7aa067e94e840d"}
export const updateServings = function( newServings)
{
  state.recipe.ingredients.forEach(ing =>{
    ing.quantity = ing.quantity * newServings / state.recipe.servings;
  })
  
  console.log(newServings);
  state.recipe.servings = newServings;
}

export const addBookmark = function (recipe)
{
  state.bookmarks.push(recipe);

  if(recipe.id === state.recipe.id) state.recipe.bookmarked  = true ;

}

export const deleteBookmark = function(id)
{
  const  index = state.bookmarks.findIndex(el => el.id===id);

  state.bookmarks.splice(index,1);
  if(id === state.recipe.id) state.recipe.bookmarked  = false ;
}