module.exports = (ctx) => ({
  search: async (data) => {
    return Promise.all(data.map(async item => {
      const { data:gifs } = await ctx.giphyClient.search(item.title);
      item.gif = gifs[0].url || '';
      return item;
    }))
  }
});
