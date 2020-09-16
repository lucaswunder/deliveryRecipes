module.exports = ctx => ({
  search: async data => {
    const recipes = await ctx.recipePuppyClient.search(data);

    const recipesWithGiphy = await ctx.giphyService.search(recipes);

    return ctx.recipeFactory.buildPayload({
      keywords: data,
      recipes: recipesWithGiphy,
    });
  },
});
