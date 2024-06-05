export const state ={
    recipe :{},
}

export const loadRecipe = async function(id)
{
    try{const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);  // here this url is for specific id as we can see also

    const data = await res.json();
    console.log(res);
    if (!res.ok) {
      throw new Error(`${data.message}, ${res.status}`)
    }
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
    alert(err);
    
}
    
}