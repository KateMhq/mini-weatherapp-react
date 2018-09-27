import React from 'react';

class Search extends React.Component {
  constructor(){
    super()
    this.state = {query: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
handleSubmit(event){
  event.preventDefault()
  this.props.receiveQuery(this.state.query)
  }
handleChange(event) {
  this.setState({query: event.target.value}) 
}

  render(){
    return (
      <div className="controls">
        <form className="search" id="search" onSubmit={this.handleSubmit}>
          <label className="search__label" htmlFor="search-tf">City</label>
          <input className="search__input" onChange={this.handleChange} id="search-tf" name="city" placeholder="Enter city name" autoComplete="city" value={this.state.query} />
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
