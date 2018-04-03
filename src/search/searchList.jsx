import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

  function verifyLoadedProps (data) {
    return typeof data != 'undefined' && Object.keys(data).length !== 0
  } 

  const renderRows = () => {
    const pokemonObject = props.pokemonDetails || {} 
    const imagesObject = pokemonObject.sprites;
    console.log('listar', pokemonObject);

      if(verifyLoadedProps(pokemonObject)){
        console.log('VERIFICADO')
        
        var imagesList = Object.values(imagesObject);
         imagesList = imagesList.filter(function(e){return e});
        
          var pokemon = pokemonObject;
          var name = pokemonObject.name;
          var weight = pokemonObject.weight;
          var image1 = imagesList[0];
              return  (
                <tr key={pokemon.id}>
                  <td><a href="">{name}</a></td>
                  <td>{weight}</td>
                  <td>
                    <img src={image1} alt="" />
                  </td>
                </tr>
              );        
      }
   

    function performarListaDeImagensPorPokemon(){
        if(verifyLoadedProps(list)){
         
          for (var i = 0; i < listaDePokemons.length; i++) { 
            console.log('ENTROU NO LOOP');  
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
    <table className="table table-dark">
      <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Peso</th>
            <th scope="col">Imagem</th>
          </tr>
        </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}