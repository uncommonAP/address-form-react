import React from 'react'

const SelectState = props => {
  let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas',
  'California','Colorado','Connecticut','Delaware','District of Columbia',
  'Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho',
  'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
  'Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota',
  'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands',
  'Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  let optionElements = states.map(option =>{
    return (
      <option key={option} placeholder={props.label} value={option}>{option}</option>
    );
  })

  return(
    <label>{props.label}
      <select name={props.name} data-label={props.label} onChange={props.bodyChange}>
        <option value={props.value}></option>
        {optionElements}
      </select>
    </label>
  )
}

export default SelectState;
