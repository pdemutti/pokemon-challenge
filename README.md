

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

