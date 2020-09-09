module.exports = (ctx) => ({
  index: async (req, res) => {
    const { i } = req.query;

    res.json(await ctx.recipesService.search(i));
  }
})
