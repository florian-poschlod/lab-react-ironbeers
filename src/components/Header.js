import React from 'react'
import { Link} from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <nav>
      {/* <h1>Header here!</h1> */}
      <Link to="/"><h2 className="centered inverted">Home</h2></Link>
    </nav>
  )
}
