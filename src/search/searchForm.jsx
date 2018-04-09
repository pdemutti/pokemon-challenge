 
import React, {Component} from 'react';

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../actions';


class SearchForm extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      inputValue: '',
    }

    this.handleChange = this.handleChange.bind(this);   
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeSearchMode = this.handleChangeSearchMode.bind(this);
    this.inputChange = this.inputChange.bind(this);

  }
  inputChange(e) {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
    const {
      clickButton,
      newValue
    } = this.props;
    return (
      <div role="from" className="Form form-group">
        <Grid cols="12 9 12">
          <div>
            <input
              onChange={this.inputChange}
              type='text'
              value={this.state.inputValue}
            />
            <button onClick={() => clickButton(this.state.inputValue)}>
            Click me!
          </button>
          </div>
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
                Habilidade
              </label>
            </div>
          </div>
          <div className="search-box">
            <input
              id="description"
              className="form-control"
              placeholder={".:: Search by " + props.selectedOption + " ::."}
              value={props.description}
              onKeyPress={props.handleKeyPress}
              // onChange={props.handleChange}
               />
              <IconButton
              style="primary"
              icon="search"
              description={props.description}
              onClick={props.handleSearch}>
            </IconButton>
          </div>     
        </Grid>     
      </div>
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);