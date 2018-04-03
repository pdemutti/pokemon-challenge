import React, { Component } from 'react';
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import SearchForm from './searchForm'
import SearchList from './searchList'
 
export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      pokemonDetails: {},
      sprites: {},
      selectedOption: 'pokemon'
    };

    this.handleChange = this.handleChange.bind(this);   
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeSearchMode = this.handleChangeSearchMode.bind(this);
    
  }
  componentDidUpdate () {
    // alert(document.querySelector('input[name=selectedOption]:checked'));
  }

  handleChange (e) {
    this.setState({...this.state, description: e.target.value});
  }
  handleChangeSearchMode (e) {
    this.setState({...this.state, selectedOption: e.target.value});
  }
  handleSearch () {
    const builtUrl = "https://pokeapi.co/api/v2/" + this.state.selectedOption +"/"+ this.state.description + '/';
    if(this.state.selectedOption === "pokemon") {
      fetch(builtUrl).then(function(response) {        
        return response.json();
      })
      .then((response) => {
        var pokemonResponse = {
          name: response.name,
          sprites: response.sprites,
          weight: response.weight,
          id: response.id
        }
        this.setState({...this.state, pokemonDetails: pokemonResponse});
        // console.log('State da caralha', this.state.pokemonDetails)
      })
      .catch(function(e){
        console.log(e);
      });
    }
    
  }

  render () {
    return (
      <div>
        <PageHeader name="Busca" small="pokemons"></PageHeader>
        <SearchForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          selectedOption={this.state.selectedOption}
          handleChange={this.handleChange}
          handleChangeSearchMode={this.handleChangeSearchMode}
          handleSearch={this.handleSearch}
        />
        <SearchList
          pokemonDetails={this.state.pokemonDetails}
         />
      </div>
    )
  }
}