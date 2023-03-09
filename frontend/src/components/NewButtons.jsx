import React from 'react'
import { Link } from 'react-router-dom'

const NewButtons = ({id,icon,path,type}) => {
  return (
    <div class="list-item-controls">
    <div class="buttons is-right">
      <Link to = {`${path}${id}`} class="button">
        <span class="icon is-small">
          <i class={`fas fa-${icon}`}></i>
        </span>
        <span>{type}</span>
      </Link>
{/* 
      <button class="button">
        <span class="icon is-small">
          <i class="fas fa-ellipsis-h"></i>
        </span>
      </button> */}
    </div>
  </div>
  )
}

export default NewButtons