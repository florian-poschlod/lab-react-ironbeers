import React from 'react';
import axios from 'axios';
import Header from './Header';
import BeerListItem from './BeerListItem'

export default class Beers extends React.Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    const beerList = this.state.beers.map(beer => {
      return <BeerListItem beer={beer}/>
    })

    return (
      <div>
        <Header />

        <ul>
        {beerList}
        </ul>

      </div>
    )
  }
}
