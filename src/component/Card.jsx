import React from 'react'

const Card = ({id, title, body}) => {

  return (
    <div className="">
      <div>{id}</div>
      <div>{title}</div>
      <div>{body}</div>

    </div>
  )
}

export default Card
