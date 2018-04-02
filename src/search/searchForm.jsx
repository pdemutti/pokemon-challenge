import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  console.log(props)
  return (
    <div role="from" className="SearchForm">
      <Grid cols="12 9 10">
        <div className="search-mode">
          <div className="radio-inline">
            <label>
              <input type="radio" name="selectedOption" value='pokemon' id="pokemon" checked={props.selectedOption === 'pokemon'} onChange={props.handleChangeSearchMode} />
              Nome ou número 
            </label>
          </div>
          <div className="radio-inline">
            <label>
              <input type="radio" name="selectedOption" value='ability' id='ability' checked={props.selectedOption === 'ability'}  onChange={props.handleChangeSearchMode} />
              Por habilidade
            </label>
          </div>
          <div className="radio-inline">
            <label>
              <input type="radio" name="selectedOption" value='type' id="type" checked={props.selectedOption === 'type'}  onChange={props.handleChangeSearchMode} />
              Por Tipo
            </label>
          </div> 
        </div>
        <div className="search-box">
          <input
            id="description"
            className="form-control"
            placeholder=".:: Busque seu Pokemon ::."
            value={props.description}
            onChange={props.handleChange} />
            <IconButton
            style="info"
            icon="search"
            description={props.description}
            onClick={props.handleSearch}>
          </IconButton>
        </div>        
      </Grid>     
    </div>
  )
}