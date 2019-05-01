import React, { Component } from 'react'
import { listExpense } from '../../actions/expense/main'
import Table from './list-table'
import { CSVLink } from 'react-csv'

class ListExpense extends Component {
    constructor (props) {
        super (props);
        const now = new Date();
        const dYear = now.getFullYear();
        const dMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1 }`;
        this.state = {
            year: dYear,
            month: dMonth,
            list: [],
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
        const list = await listExpense(this.state);
        this.setState({
            list,
        })
    }
    render () {
        return (
            <div>
                <form className = 'mb-2 form-inline' onSubmit = { this.handleSubmit }>
                    <div className = 'form-group mr-2 '>
                        <label className  =  ' mr-2 '>Year</label>
                        <input min = '1900' max = '2050' type = 'number' name = 'year' className = 'form-control' onChange = { this.handleChange } value = { this.state.year } />
                    </div>
                    <div className = 'form-group  mr-2 '>
                        <label className  =  ' mr-2 '>Month</label>
                        <input type = 'number' min = '1' max = '12' name = 'month' className = 'form-control' onChange = { this.handleChange } value = { this.state.month } />
                    </div>
                    <button type = 'submit' className = 'btn btn-primary mr-2 '>Search</button>

                    { this.state.list.length !==0 ? <CSVLink data = {this.state.list} filename = {`clinic-expense-${this.state.list[0].date.substring(0, 7)}.csv`} className = 'btn btn-primary mb-2'>Download</CSVLink> : null }
                </form>
                <Table list = { this.state.list } />
            </div>
        )
    }
}

export default ListExpense