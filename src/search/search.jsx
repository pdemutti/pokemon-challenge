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
      list: [],
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
    const builtUrl = "http://pokeapi.co/api/v2/" + this.state.selectedOption +"/"+ this.state.description;
    alert(builtUrl)
     
    fetch(builtUrl, { 
        method: 'get', 
        mode: 'no-cors',
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      })
      .then((resp) => {
        debugger
          console.log(resp.name)
        });
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
          handleClear={this.handleClear}
        />
        <SearchList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
         />
      </div>
    )
  }
}