const mapFields = (recipes) => {
  let newRecipes=[];
  recipes.forEach(recipe => {
        newRecipes.push({
          title: recipe.title,
          ingredients: recipe.ingredients,
          link: recipe.href,
          gif: recipe.gif
        })
    });
    return newRecipes;
}

module.exports = (ctx) => ({
  buildPayload: ({ keywords, recipes }) => {
    let payload = {
      keywords: [keywords]
    }

    payload.recipes = mapFields(recipes);

    return payload;
  }
});
