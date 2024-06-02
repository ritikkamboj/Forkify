const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
console.log("jai maata di ")
// code to fetch the the data form JS api by using sync and awist and 

const dummy = async function () {
  try {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`);  // here this url is for specific id as we can see also

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

    
    recipe ={
      id :recipe.id,
      title:recipe.title,
      publisher:recipe.publisher,
      sourceUrl:recipe.source_url,
      image:recipe.image_url,
      servings:recipe.servings,
      cookingTimes:recipe.cooking_time,
      ingredients:recipe.ingredients

    };
    console.log(recipe);

  } catch (err) {
    console.log(`${err.message} yeh apne waala error hai`);
  }

}
dummy();
