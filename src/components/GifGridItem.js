import React from 'react'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className="gif-grid-item animate__animated animate__fadeIn">
      <img src={url} alt=""/>
      <p>{ title }</p>
    </div>
  )
}
