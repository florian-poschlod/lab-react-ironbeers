import React from 'react';
import './BeerListItem.css';
import { Link } from 'react-router-dom';

export default function BeerListItem(props) {

  return (
    <li key={props.beer._id} className="beer-li flex row" >
      <Link to={`/beers/${props.beer._id}`}>

        <img src={props.beer.image_url} className="img-list" />

        <div>
          <h3>{props.beer.name}</h3>
          <p>{props.beer.tagline}</p>
          <p>{props.beer.contributed_by}</p>
        </div>


      </Link>
    </li>
  )
}
