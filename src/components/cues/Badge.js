import React from 'react'

const Badge = ({ children, type = 'primary' }) => {
  return (
    <span className={`badge ${type}`}>{children}</span>
  )

}

export default Badge
