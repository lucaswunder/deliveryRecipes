const awilix = require('awilix');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

// // Controllers
// const RecipeController = require('./contollers/RecipeController');

// // Factories
// const RecipeFactory = require('./factory/RecipeFactory');

// // Services
// const GiphyService = require('./services/GiphyService');
// const RecipesService = require('./services/RecipesService');

// // HTTP Rest Client
// const HttpClient = require('./integration/Rest/httpClient')

// // External Clients
// const RecipePuppyClient = require('./Integration/Rest/RecipePuppyClient');
// const GiphyClient = require('./Integration/Rest/GiphyClient');

// container.register({
//   recipeFactory: awilix.asFunction(RecipeFactory),
//   giphyService: awilix.asFunction(GiphyService),
//   recipesService: awilix.asFunction(RecipesService),
//   httpClient: awilix.asFunction(HttpClient),
//   recipePuppyClient: awilix.asFunction(RecipePuppyClient),
//   giphyClient: awilix.asFunction(GiphyClient),
//   recipeController: awilix.asFunction(RecipeController),
// })

container.loadModules(
  [
      'src/**/*.js',
  ],
  {
      formatName: 'camelCase',
      resolverOptions: {
          injectionMode: awilix.InjectionMode.PROXY
      }
  });

module.exports = container;
