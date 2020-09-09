const awilix = require('awilix');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

//Controllers
const RecipeController = require('./Contollers/RecipeController');

//Factories
const RecipeFactory = require('./Factory/RecipeFactory');

//Services
const GiphyService = require('./Services/GiphyService');
const RecipesService = require('./Services/RecipesService');

//HTTP Rest Client
const HttpClient = require('./Integration/Rest/httpClient')

//External Clients
const RecipePuppyClient = require('./Integration/Rest/RecipePuppyClient');
const GiphyClient = require('./Integration/Rest/GiphyClient');

container.register({
  recipeFactory: awilix.asFunction(RecipeFactory),
  giphyService: awilix.asFunction(GiphyService),
  recipesService: awilix.asFunction(RecipesService),
  httpClient: awilix.asFunction(HttpClient),
  recipePuppyClient: awilix.asFunction(RecipePuppyClient),
  giphyClient: awilix.asFunction(GiphyClient),
  recipeController: awilix.asFunction(RecipeController),
})

module.exports = container;
