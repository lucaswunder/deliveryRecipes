module.exports = (ctx) => ({
  index: async (req, res) => {
    const { i } = req.query;

    return res.json(await ctx.recipesService.search(i));
  }
})
