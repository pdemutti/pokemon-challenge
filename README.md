

# Pokemon Challange

## The challange

Create a page to list all pokemons <br />
Create a page to list details of selected pokemon
> **API Documentation:**  [Pokeapi](https://pokeapi.co/)


Quick install
-------------

The first thing you should do, is install the Node.js dependencies. To install Node.js dependencies you're going to use npm. In your application folder run this in the **command-line**:

> $ npm install:

## Building project

Before start Pokedex application, we need to build .scss files

To build build-css

    > $ npm run prod

To build css and keep watching for changed files

    > $ npm run watch-css

To build to production

    > $ npm run prod

To run in dev mode

    > $ npm run dev

## Endpoints Documentation 

### Search Pokemon endpoint

> Search pokemon by ability

Endpoint: http://pokeapi.co/api/v2/ability/{ability} <br />

method: GET <br />
response : 
body:

```

{
	"effect_changes": [],
	"name": "battle-armor",
	"generation": {
		"url": "https://pokeapi.co/api/v2/generation/3/",
		"name": "generation-iii"
	},
	"pokemon": [
		{
			"slot": 3,
			"is_hidden": true,
			"pokemon": {
				"url": "https://pokeapi.co/api/v2/pokemon/104/",
				"name": "cubone"
			}
		},
		{
			"slot": 3,
			"is_hidden": true,
			"pokemon": {
				"url": "https://pokeapi.co/api/v2/pokemon/105/",
				"name": "marowak"
			}
		},
		{
			"slot": 2,
			"is_hidden": false,
			"pokemon": {
				"url": "https://pokeapi.co/api/v2/pokemon/140/",
				"name": "kabuto"
			}
		}
	],
	"is_main_series": true,
	{...}
}
  
```


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