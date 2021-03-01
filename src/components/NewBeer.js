import React from 'react';
import Header from './Header'
import axios from 'axios'

export default class NewBeer extends React.Component {

  state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    }

  handleSubmit = event => {
    console.log('handle submit called')
    event.preventDefault();

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };

    this.setState({
      beer: newBeer
    })

    console.log('state in submit', this.state)

    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then(response => {
        console.log(response);
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: ''
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
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
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <label htmlFor="brewer_tips">Brewer tips</label>
          <input
            type="text"
            name="brewer_tips"
            id="brewer_tips"
            value={this.state.brewer_tips}
            onChange={this.handleChange}
          />

          <label htmlFor="first_brewed">First brewed</label>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />

          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />

          <label htmlFor="contributed_by">Conrtibuted by</label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}
