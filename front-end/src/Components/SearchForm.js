import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

export class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
            , dropdown: ""
        }
    }

    inputChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            input: evt.target.value
        })
    }

    dropdownChange = evt => {
        this.setState({
            dropdown: evt.target.value
        })
    }

    submitForm = (evt) => {
        evt.preventDefault()
        console.log(evt)
        this.props.sendInput(this.state.input)
        console.log(this.state.input)
        this.props.sendInput(this.state)
        this.props.food.push(`name/:id${this.state.dropdown}/${this.state.input}`)

    }

    render() {
        return (
            <Form onSubmit={this.submitForm}>
                <Form.Control as="select" title="Narow Your Search" id="basic-nav-dropdown" onChange={this.dropdownChange}>
                    <option>Narrow Your Search</option>
                    <option value="name">Dishes</option>
                    <option value="id">Recipe ID</option>
                    <option value="image">Images</option>
                    <option value="category">Categories</option>
                    <option value="culture">Cultures</option>
                </Form.Control>
                <Form.Control type="input" onChange={this.inputChange} />
                <Button type="submit" >Search</Button>
            </Form>
        )
    }
}

export default withRouter(SearchForm)