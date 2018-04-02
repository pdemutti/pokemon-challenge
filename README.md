

# Pokemon Challange

## The challange

Create a page to list all pokemons <br />
Create a page to list details of selected pokemon
> **API Documentation:**  [Pokeapi](https://pokeapi.co/)

  

## Endpoints Documentation 

### Search Pokemon endpoint

> Search pokemon by name or id

  

Endpoint: http://pokeapi.co/api/v2/pokemon/{idPokemon} <br />

method: GET <br />
response : 
body:

```

{
    "id": 1,
    "name": "bulbasaur",
    "base_experience": 64,
    "height": 7,
    "is_default": true,
    "order": 1,
    "weight": 69,
    "abilities": [
        {
            "is_hidden": true,
            "slot": 3,
            "ability": {
                "name": "chlorophyll",
                "url": "http://pokeapi.co/api/v2/ability/34/"
            }
        }
    ]...},
  
```

## Structure


The basic structure of this challenge is given in the following way:

*  `pokemon-challenge/` Contains the source code of the front-end challenge.

*  `node_modules/` Contains all dependencies fetched via \[NPM\](https://www.npmjs.org/). However, this directory is unnecessary for versioning, so it is ignored.

*  `public/` Contains all the static files you use in your application, this is where you store your front-end files.

*  `.gitignore` The .gitignore file specifies intentionally untracked files that Git should ignore.

*  `LICENSE` A software license tells others what they can and can't do with your source code.

*  `package.json` Lists all \[Node.js\](http://nodejs.org/) dependencies.

*  `README.md` Explains how application works.