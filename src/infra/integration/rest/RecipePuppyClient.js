const URL = process.env.EXTERNAL_ADDRESS_RECIPE_PUPPY;

module.exports = (ctx) => ({
  search: async (data) => {
    const httpClient = ctx.httpClient(URL);

    try {
      const response = await httpClient.get('/',{
        params: data
      });

      return response.data.results;
    } catch (error) {
        const err = new Error();
        err.message = 'Recipe Puppy external service is unvailable';
        throw err;
      }
  }
})
