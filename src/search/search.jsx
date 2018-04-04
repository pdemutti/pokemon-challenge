import React, { Component } from 'react';
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import SearchForm from './searchForm'
import SearchList from './searchList'
import Alert from '../template/alert'
import Loading from '../template/loading';

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      pokemonDetails: {},
      sprites: {},
      showAlert: false,
      alertTxt: '',
      alertType: 'success',
      showLoading: false,
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
      this.setState({...this.state, showLoading: true});
      fetch(builtUrl).then(function(response) {       
        return response.json();
      })
      .then((response) => {
        this.setState({...this.state, showLoading: false}); 
        
        if (response.detail !== "Not found.") {

          var pokemonResponse = {
            name: response.name,
            sprites: response.sprites,
            weight: response.weight,
            height: response.height,
            id: response.id
          }

          this.setState({...this.state, pokemonDetails: pokemonResponse});
          this.setState({...this.state, showAlert: true});
          this.setState({...this.state, alertTxt: 'Sua pesquisa retornou o pokemon '+ this.state.pokemonDetails.name});
          this.setState({...this.state, alertType: 'success'});
          
        } else {
          this.setState({...this.state, alertTxt: 'Erro, tente novamente'});
          this.setState({...this.state, alertType: 'danger'});
          this.setState({...this.state, showAlert: true});
          this.setState({...this.state, pokemonDetails: {}});

          return Promise.reject(error)
        }
        

      })
      .catch(function(e){
        this.setState({...this.state, alertTxt: 'Erro, tente novamente'});
        this.setState({...this.state, alertType: 'danger'});
        this.setState({...this.state, showAlert: true});
        return Promise.reject(error)
      });
    }
    
  }

  render () {
    return (
      <div>
        <PageHeader name="Busca" small="Pokemons"></PageHeader>
        <Alert
            showAlert={this.state.showAlert}
            name={this.state.pokemonDetails.name}
            txt={this.state.alertTxt}
            type={this.state.alertType}
        />
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
        <Loading showLoading={this.state.showLoading}/>
      </div>
    )
  }
}