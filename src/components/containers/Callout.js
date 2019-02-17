import React from 'react'

const Callout = ({ children, type }) => (
  <div className={`callout ${type}`}>
    { children }
  </div>
)

export default Callout
