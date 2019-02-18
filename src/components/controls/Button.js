import React from 'react'

const Button = ({ tag = 'a', children, type = '' }) => {
  const tagArr = ['a', 'button'];
  const Tag = (tagArr.includes(tag)) ? tag : 'a'
  return (
    <Tag className={`button ${type}`}>
      {children}
    </Tag>
  )

}

export default Button
