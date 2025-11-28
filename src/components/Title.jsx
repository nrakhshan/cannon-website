import React from 'react'

const Title = ({ children, className }) => {
  return (
    <h1 className={`cantata font-light text-4xl pb-6 ${className}`}>
      {children}
    </h1>
  )
}

export default Title
