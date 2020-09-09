module.exports = (ctx) => ({
  search: async (data) => {
    for (let index = 0; index < data.length; index++) {
      const { data:gifs } = await ctx.giphyClient.search(data[index].title);
      data[index].gif = gifs[0].url || '';
    }
    return data;
  }
});
