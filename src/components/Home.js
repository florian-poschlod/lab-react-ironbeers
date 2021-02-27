import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SharedStyle.css';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>

        <div className="section">
          <Link to="/beers">
            <img src="assets/beers.png" alt="A bar" />
            <div className="hl-container">
              <h2>All Beers</h2>
            </div>
          </Link>
        </div>

        <div className="section">
          <Link to="/random-beer">
            <img src="assets/random-beer.png" alt="Detail of a beer tap" />
            <div className="hl-container">
              <h2>Random Beers</h2>
            </div>
          </Link>
        </div>

        <div className="section">
          <Link to="/new-beer">
            <img src="assets/new-beer.png" alt="A glass of beer" />
            <div className="hl-container">
              <h2>New Beer</h2>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
