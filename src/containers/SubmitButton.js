import React from 'react'

const SubmitButton = props => {
  return(
    <input
      type={props.type}
      className={props.className}
      value={props.value}
      onSubmit={props.handleFormSubmit}
    />
  )
}

export default SubmitButton;
