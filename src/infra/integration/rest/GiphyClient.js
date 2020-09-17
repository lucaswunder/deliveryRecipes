const URL = process.env.EXTERNAL_ADDRESS_GIPHY;
const api_key = process.env.EXTERNAL_SERVICE_API_KEY_GIPHY;

module.exports = (ctx) => ({
  search: async (data) => {
    const httpClient = ctx.httpClient(URL);
    try {
      const response = await httpClient.get('/search', {
        params:{
          api_key,
          limit: 1,
          q: data
        }
      });

      return response.data;
    } catch (error) {
        const err = new Error();
        err.message = 'Giphy external service is unavailable';
        throw err;
      }
    }
  }
)
