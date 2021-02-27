import React from 'react';
import Header from './Header';

export default function Beer(props) {
  console.log(props.match.params)

  return (
    <div>
      <Header />
      <h1>Beer here!</h1>
    </div>
  )
}
