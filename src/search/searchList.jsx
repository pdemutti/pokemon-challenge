import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
  // const renderRows = () => {
  //   const list = props.pokemonDetails || []
  //   return list.map(todo => (
  //     <tr key={todo._id}>
  //       <td className={todo.done ? 'markedAsDone': ''}>{todo.description}</td>
  //       <td>
  //         <IconButton
  //           hide={todo.done}
  //           style="success"
  //           icon="check"
  //           onClick={() => props.handleMarkAsDone(todo)}
  //         />
  //       </td>
  //     </tr>
  //   ));
  // }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição {props.pokemonDetails}</th>
          <td className="tableActions"></td>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  )
}