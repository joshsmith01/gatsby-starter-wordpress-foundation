import React from 'react'

const ButtonGroup = ({ children, type = '' }) => {
  const tagArr = ['a', 'button'];

  return (
    <div className={`button-group ${type}`}>
      {children}
    </div>
  )

}

export default ButtonGroup
