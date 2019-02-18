import React from 'react'

const Heading = ({
  tag = 2,
  children,
  type = 'headline'
                 }) => {
  const Tag = tag > 6 ? 'h6' : `h${tag}`;
  return (
    <Tag className={`${type}`}>
      {children}
    </Tag>
  )

}

export default Heading
