import React, { Component } from 'react'
import Form from './Form'
import SubmitButton from './SubmitButton'
import SelectState from './SelectState'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      formInputs: [
        {id: "first-name", name: "firstName", label: "First Name"},
        {id: "last-name", name: "lastName", label: "Last Name"},
        {id: "address", name: "address", label: "Address"},
        {id: "city", name: "city", label: "City"},
        {id: "state", name: "state", label: "State"},
        {id: "zip-code", name: "zipCode", label: "Zip Code"},
        {id: "phone-number", name: "phoneNumber", label: "Phone Number"},
        {id: "email", name: "email", label: "Email"}
      ],
      values: {"First Name": '', "Last Name": '', "Address": '', "City": '', "State": '', "Zip Code": '', "Phone Number": '', "Email": ''}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.validateInputFields = this.validateInputFields.bind(this)
    this.bodyChange = this.bodyChange.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.validateInputFields(this.state.values)
    if (Object.keys(this.state.errors).length === 0) {
      console.log(this.state.values);
    }
  }

  bodyChange(event) {
    let errors = this.state.errors
    delete errors[event.target.dataset.label]
    let valuesHash = Object.assign({}, this.state.values)
    valuesHash[event.target.dataset.label] = event.target.value
    this.setState({
      values: valuesHash,
      errors: errors
     })
     console.log(this.state.values[event.target.dataset.label]);
  }

  validateInputFields(inputHash) {
    Object.keys(inputHash).map(key => {
      if (inputHash[key] === '' || inputHash[key] === ' ') {
        let newError = {[key]: `${key} cannot be blank`}
        this.setState({ errors: Object.assign(this.state.errors, newError) })
        console.log(this.state.errors);
      }
    })
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    let formInputs = Object.values(this.state.formInputs).map(input => {
      if (input.name === "state") {
        return(
          <SelectState
            key={input.id}
            bodyChange={this.bodyChange}
            name={input.name}
            label={input.label}
            value={this.state.values.state}
          />
        )
      } else {
        return(
          <Form
            key={input.id}
            id={input.id}
            name={input.name}
            label={input.label}
            bodyChange={this.bodyChange}
            value={this.state.values[input.name]}
          />
        )
      }
    })

    return (
      <form className="callout" id="shipping-address-form" onSubmit={this.handleFormSubmit}>
        <h1>Shipping Address</h1>
          {errorDiv}
          {formInputs}

          <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
}

export default FormContainer
