import React from 'react'

const Heading = ({
                   tag = 2,
                   text,
                   className = 'headline'
                 }) => {
  const Tag = tag > 6 ? 'h6' : `h${tag}`;
  return (
    <Tag className={`heading-${className}`}>
      {text}
    </Tag>
  )

}

export default Heading
