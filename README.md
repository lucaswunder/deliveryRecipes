# Recipes 

## Documentation

### Stack

| Responsability     | What        |
| ------------------ | ----------- |
| JS Spec            | ES6         |
| Dependency Injec.  | Awilix      |
| Code Standard      | ESLint      |
| Logs               | Morgan      |


### Installing app

$ npm install

### Running in dev with nodemon

$ npm run dev

### Docker

Build docker image

$ docker build --pull --rm -f "Dockerfile" -t deliveryrecipes:latest "."

Run application

$ docker run --rm -d  -p 3000:3000/tcp deliveryrecipes:latest


####
