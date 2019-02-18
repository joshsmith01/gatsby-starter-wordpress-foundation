import React from 'react'

const CloseButton = ({ tag = 'button', children, type = 'button', ariaLabel='Dismiss alert' }) => {

  const Tag = tag
  return (
    <Tag className={`close-button`} aria-label={ariaLabel} type={type} data-close>
      {children}
    </Tag>
  )

}

export default CloseButton
