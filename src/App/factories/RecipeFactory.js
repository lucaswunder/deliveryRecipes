const mapFields = (recipes) => {
  const newRecipes=[];
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

module.exports = () => ({
  buildPayload: ({ keywords, recipes }) => {
    const payload = {
      keywords: [keywords]
    }

    payload.recipes = mapFields(recipes);

    return payload;
  }
});
