import React from 'react'

const Form = props => {
  return(
      <label htmlFor={props.name}>{props.label}
        <input
          type="text"
          id={props.id}
          name={props.name}
          onChange={props.bodyChange}
          data-label={props.label}
          value={props.value}
        />
      </label>
  )
}

export default Form;
