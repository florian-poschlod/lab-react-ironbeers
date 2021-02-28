import React from 'react';
import Header from './Header';
import axios from 'axios';

export default class RandomBeer extends React.Component {

  state = {
    beer: []
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        this.setState({
          beer: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    console.log(this.state.beer)

    return (
      <div>
        <Header />
        <div>
          <img src={this.state.beer.image_url} className="img-list" />

          <div>
            <h3>{this.state.beer.name}</h3>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
        </div>

      </div>
    )
  }

}
