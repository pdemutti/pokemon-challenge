import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

  function verifyLoadedProps (data) {
    return typeof data != 'undefined'
  } 

  const renderRows = () => {
    const list = props.pokemonDetails || {} 
    const listar = list.sprites
    console.log('listar', listar)

    var listOfObjects = [];
    var singleObj;
    var resultObject;
    
    
   if(verifyLoadedProps(listar)){
     debugger;
    console.log('ENTROU NO LOOP');
    var listaDePropriedades = Object.values(listar);
    listaDePropriedades = listaDePropriedades.filter(function(e){return e});
    singleObj = '';

    return listaDePropriedades.map(todo => (
      <tr key={todo}>
        <td className='images'>
          <img src={todo} alt="" />
        </td>
      </tr>
    ));


    // for (var i = 0; i < listaDePropriedades.length; i++) { 
    //   debugger;
    //    var art = listaDePropriedades[i];
    //    var name = list.name;
    //    var weight = list.weight;
    //    debugger
    //    if(art != null){
    //     singleObj += '<tr>'+ 
    //       '<td>'+name+'</td>'+
    //       '<td>'+weight+'</td>'+
    //       '<td><img src='+art+' alt="" /></td>'+
    //     '</tr>'
        
    //    }
    // }

   }

    debugger;
    if(verifyLoadedProps(singleObj)) {
      return (singleObj);
    } else {
      return ;
    };
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Resultado</th>
          <td className="tableActions"></td>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}