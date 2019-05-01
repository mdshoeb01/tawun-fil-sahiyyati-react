import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { addExpense } from '../../actions/expense/main'
import { PopUp } from '../other/form-pop-up'

class AddExpense extends Component {
    constructor (props) {
        super(props);
        const now = new Date();
        const dMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1 }`;
        const dDate = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`
        this.state = {
            date: `${now.getFullYear()}-${dMonth}-${dDate}`,
            description: '',
            type: 'debit',
            amount: null,
            redirect: false,
            success: false,
            failure: false,
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addExpense(this.state);
            this.setState({
                success: true,
            })
            setTimeout(() => this.setState({
                success: false,
                redirect: true,
            }), 2000);
        } catch (err) {
            this.setState({
                failure: true,
            })
            setTimeout(() => this.setState({
                failure: false,
            }), 2000)
            throw err;
        }
    }
    render () {
        return (
            <form onSubmit = { this.handleSubmit }>
                {this.state.redirect ? <Redirect to = '/list-expense'/> : null}
                <div className = 'form-group'>
                    <label>Date</label>
                    <input type = 'date' className = 'form-control' name = 'date' value = { this.state.date } onChange = { this.handleChange } />
                </div>
                <div className = 'form-group'>
                    <label>Description</label>
                    <input placeholder = 'Some Description' type = 'text' className = 'form-control' name = 'description' onChange = { this.handleChange } />
                </div>
                <div className = 'form-group'>
                    <label>Type</label>
                    <select className = 'custom-select' name = 'type' onChange = { this.handleChange }>
                        <option value = 'debit'>debit</option>
                        <option value = 'credit'>credit</option>
                    </select>
                </div>
                <div className = 'form-group'>
                    <label>Amount</label>
                    <input placeholder = '500' type = 'number' className = 'form-control' name = 'amount' onChange = { this.handleChange } />
                </div>
                { this.state.success ? <PopUp text = 'Entry successfull, Wait while you will be redirected' /> : null }
                { this.state.failure ? <PopUp text = 'Something went wrong' /> : null }
                <button type = 'submit' className = 'btn btn-primary'>Submit</button>
            </form>
        )
    }
}

export default AddExpense