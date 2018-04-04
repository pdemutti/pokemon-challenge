import React from 'react'
import IconButton from '../template/iconButton'
import Loading from '../template/loading'

export default props => {

  function verifyLoadedProps (data) {
    return typeof data != 'undefined' && Object.keys(data).length !== 0
  } 

  const renderRows = () => {
    const pokemonObject = props.pokemonDetails || {} 
    const imagesObject = pokemonObject.sprites;
    console.log('listar', pokemonObject);

      if(verifyLoadedProps(pokemonObject && imagesObject)){
        console.log('VERIFICADO')
        
        var imagesList = Object.values(imagesObject);
         imagesList = imagesList.filter(function(e){return e});
        
          var pokemon = pokemonObject;
          var name = pokemonObject.name;
          var weight = pokemonObject.weight;
          var height = pokemonObject.height;
          var image1 = imagesList[0];
              return  (
                <div className="card col-md-4">
                  <img className="card-img-top" data-src={image1} alt="" src={image1} data-holder-rendered="true" />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                  </div>
                  <ul className="list-group list-group-flush" key={pokemon.id}>
                    <li className="list-group-item card-subtitle mb-2 text-muted font-weight-bold">Id: {pokemon.id}</li>
                    <li className="list-group-item card-subtitle mb-2 text-muted font-weight-bold">Peso: {weight}</li>
                    <li className="list-group-item card-subtitle mb-2 text-muted">Altura: {height}</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">Mais sobre o {name}</a>       
                  </div>
                </div>                
              );        
      }
   

    function performarListaDeImagensPorPokemon(){
        if(verifyLoadedProps(list)){
          
          for (var i = 0; i < listaDePokemons.length; i++) { 
            var pokemon = listaDePokemons[i];
            var name = pokemon.name;
            var weight = pokemon.weight;
            if(art != null){
                return  (
                  <tr key={pokemon.id}>
                    <td>{name}</td>
                    <td>{weight}</td>
                  </tr>
                );
            }
          }
      }
    }


  }
 // var listaDePropriedades = Object.values(listar);
    // listaDePropriedades = listaDePropriedades.filter(function(e){return e});
    // singleObj = '';
    // return listaDePropriedades.map(todo => (
    //   <tr key={todo}>
    //     <td className='images'>
    //       <img src={todo} alt="" />
    //     </td>
    //     <td>{name}</td>
    //   </tr>
    // ));


  return (
    <div className=" col-md-12">
      {renderRows()}
    </div>
  )
}