const RecipeService = require('../../src/app/services/RecipesService');

describe('Recipe Service', () => {
  describe('..Search', () => {
    let recipeService = {}, recipePuppyClient={},
    giphyService={}, recipeFactory={};

    beforeEach(() => {
      recipePuppyClient = {
        search: jest.fn()
      }

      giphyService = {
        search: jest.fn()
      }

      recipeFactory = {
        buildPayload: jest.fn()
      }

      recipeService = RecipeService({
        recipePuppyClient,
        giphyService,
        recipeFactory
      })
    });

    it('Should returns the recipes', async () => {
      const data = { a:'a' }
      await recipeService.search(data);

      expect(recipePuppyClient.search).toHaveBeenCalledWith(data);
      expect(true).toBe(true);
    });

  });
});
