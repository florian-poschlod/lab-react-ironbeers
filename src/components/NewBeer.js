import React from 'react';
import Header from './Header'
import axios from 'axios'

export default class NewBeer extends React.Component {

  state = {
    beer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    }
  }

  handleSubmit = event => {
    console.log('handle submit called')

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };

    this.setState({
      beer: newBeer
    })

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new, ${this.state}')
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
  }
  

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      beer: {[name]: event.target.value}
    })
  }


  render() {

    return (
      <div>
        <Header />
        <h3>Add new beer</h3>

        <form onSubmit={this.handleSubmit} className="flex col">

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.beer.name}
            onChange={this.handleChange}
          />

          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={this.state.beer.tagline}
            onChange={this.handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.beer.description}
            onChange={this.handleChange}
          />

          <label htmlFor="first_brewed">First brewed</label>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            value={this.state.beer.first_brewed}
            onChange={this.handleChange}
          />

          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={this.state.beer.attenuation_level}
            onChange={this.handleChange}
          />

          <label htmlFor="contributed_by">Conrtibuted by</label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            value={this.state.beer.contributed_by}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}
