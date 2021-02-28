import React from 'react';
import './BeerListItem.css';
import { Link } from 'react-router-dom';


export default class BeerListItem extends React.Component {

  state = {
    beer: this.props.beer
  }


  render() {

    return (
      
    <Link to={`/beers/${this.state.beer._id}`}>
      <li key={this.state.beer._id} className="beer-li flex row" >

        <img src={this.state.beer.image_url} className="img-list" />

        <div>
          <h3>{this.state.beer.name}</h3>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.contributed_by}</p>
        </div>


      </li>
    </Link>
  )
  }
}