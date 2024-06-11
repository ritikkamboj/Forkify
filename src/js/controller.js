import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// console.log(icons)
 
// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
console.log("jai maata di ")

// const  renderSpinner = function (parentEl) {
//   const html = `<div class="spinner">
//   <svg>
//     <use href="${icons}#icon-loader"></use>
//   </svg>
// </div>`;
//   parentEl.innerHTML='';
//   parentEl.insertAdjacentHTML('afterbegin', html);
// }
// code to fetch the the data form JS api by using sync and awist and 
if(module.hot)
  {
    module.hot.accept();
  }
const controlSearchResults = async function()
{
 try{
  // console.log('jai')
  resultView.renderSpinner();
  const query = searchView.getQuery();
  console.log(query)
  if(!query)
    return
  await model.loadSearchResults(query);
  // searchView.clear();
  console.log(model.state.search.result);
  // resultView.render(model.state.search.result);
  resultView.render(model.getSearchResultsPage(2));

  paginationView.render(model.state.search);

;
 } 
 catch(err)
 {
  // console.log('abab')
console.log(err);

 }

}
// controlSearchResults();


const showRecipe = async function () {
  try {
    const id =window.location.hash.slice(1)
    // console.log(id);

    // this below handling is called guard function
    if(!id)
      return ;
    recipeView.renderSpinner();
   await model.loadRecipe(id); //why this function don't return anything  now here its calling a async function , which give in retunr promise to handle this we have to attch the await keyword

   const {recipe} =model.state;

   recipeView.render(model.state.recipe);
   


    // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`);  // here this url is for specific id as we can see also
    
  //   const markup = `
  //   <figure class="recipe__fig">
  //   <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
  //   <h1 class="recipe__title">
  //     <span>${recipe.title}</span>
  //   </h1>
  // </figure>

  // <div class="recipe__details">
  //   <div class="recipe__info">
  //     <svg class="recipe__info-icon">
  //       <use href="${icons}#icon-clock"></use>
  //     </svg>
  //     <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
  //     <span class="recipe__info-text">minutes</span>
  //   </div>
  //   <div class="recipe__info">
  //     <svg class="recipe__info-icon">
  //       <use href="${icons}#icon-users"></use>
  //     </svg>
  //     <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
  //     <span class="recipe__info-text">servings</span>

  //     <div class="recipe__info-buttons">
  //       <button class="btn--tiny btn--increase-servings">
  //         <svg>
  //           <use href="${icons}#icon-minus-circle"></use>
  //         </svg>
  //       </button>
  //       <button class="btn--tiny btn--increase-servings">
  //         <svg>
  //           <use href="${icons}#icon-plus-circle"></use>
  //         </svg>
  //       </button>
  //     </div>
  //   </div>

  //   <div class="recipe__user-generated">
  //     <svg>
  //       <use href="${icons}#icon-user"></use>
  //     </svg>
  //   </div>
  //   <button class="btn--round">
  //     <svg class="">
  //       <use href="${icons}#icon-bookmark-fill"></use>
  //     </svg>
  //   </button>
  // </div>

  // <div class="recipe__ingredients">
  //   <h2 class="heading--2">Recipe ingredients</h2>
  //   <ul class="recipe__ingredient-list">
  //     ${recipe.ingredients.map(ing => {
  //     return `<li class="recipe__ingredient">
  //     <svg class="recipe__icon">
  //       <use href="${icons}#icon-check"></use>
  //     </svg>
  //     <div class="recipe__quantity">${ing.quantity}</div>
  //     <div class="recipe__description">
  //       <span class="recipe__unit">${ing.unit}</span>
  //       ${ing.description}
  //     </div>
  //   </li>`}).join('')}

      
  //   </ul>
  // </div>

  // <div class="recipe__directions">
  //   <h2 class="heading--2">How to cook it</h2>
  //   <p class="recipe__directions-text">
  //     This recipe was carefully designed and tested by
  //     <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
  //     directions at their website.
  //   </p>
  //   <a
  //     class="btn--small recipe__btn"
  //     href="${recipe.sourceUrl}"
  //     target="_blank"
  //   >
  //     <span>Directions</span>
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-right"></use>
  //     </svg>
  //   </a>
  // </div>
  // `;
  //   .innerHTML = '';
  //   .insertAdjacentHTML('afterbegin', markup);



  } catch (err) {
    // console.log(`${err.message} yeh apne waala error hai`);
    console.log(`${err.message} yeh apne waala error hai`);
    recipeView.renderError();  // now again its a violation of MVC protocol as we are mention
    //here the messege which is visible on view , we ahve to pass it to recipeView.js
  }

}
showRecipe();

// window.addEventListener('hashchange',showRecipe); // this works when we change the link 
// but if we directly pasting the link in new tab that will nit come under the 'hashcahnge' event , so we have to use another event lstenrer 

// window.addEventListener('load',showRecipe);

// in above two window line code we can see that htey not follow DRY principle so to correct that :

const init = function()
{
recipeView.addHandleRender(showRecipe);
searchView.addHandleSearch(controlSearchResults);
}
init()

