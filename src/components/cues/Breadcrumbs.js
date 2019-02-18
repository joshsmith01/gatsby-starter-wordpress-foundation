import React from 'react'

const Breadcrumbs = () => (
  <nav aria-label="You are here:" role="navigation">
    <ul className="breadcrumbs">
      <li><a href="#0">Home</a></li>
      <li><a href="#0">Features</a></li>
      <li className="disabled">Gene Splicing</li>
      <li>
        <span className="show-for-sr">Current: </span>
          Cloning
      </li>
    </ul>
  </nav>
  )

export default Breadcrumbs
