import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClinics } from '../../actions/clinic/main'
import { listDailyUpdate } from '../../actions/daily-update/main'
import Table from './table'
import { CSVLink } from 'react-csv'

class ListDailyUpdate extends Component {
    constructor (props) {
        super(props);
        const now = new Date();
        const dMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
        this.state = {
            year: now.getFullYear(),
            month: dMonth,
            list: [],
        }
    }
    componentDidMount () {
        this.props.getClinics();
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let list = await listDailyUpdate(this.state);
        this.setState({
            list,
        })
    }
    render () {
        return (
            <div>
                <form className = 'mb-3 form-inline' onSubmit = {this.handleSubmit}>
                    <div className = 'form-group mr-2 mb-2'>
                        <label className = 'mr-2'>Year</label>
                        <input min = '1900' max = '2050' type = 'number' name = 'year' className = 'form-control' value = {this.state.year} onChange = {this.handleChange}/>
                    </div>
                    <div className = 'form-group mr-2 mb-2'>
                        <label className = 'mr-2'>Month</label>
                        <input type = 'number' min = '1' max = '12' name = 'month' className = 'form-control' value = {this.state.month} onChange = {this.handleChange}/>                        
                    </div>
                    <div className = 'form-group mr-2 mb-2'>
                        <label className = 'mr-2'>Clinic</label>
                        <select className = 'custom-select' name = 'clinicId' onChange = {this.handleChange}>
                            <option default>select</option>
                            {this.props.clinics.map((entry, index) => {
                                return ( <option value = {entry.id} key = {index}>{entry.name}</option> )
                            })}
                        </select>
                    </div>
                    <button type = 'submit' className = 'btn btn-primary mr-2'>Search</button>
                    { this.state.list.length !==0 ? <CSVLink data = {this.state.list} filename = {`${this.state.list[0].clinicName}-${this.state.list[0].date.substring(0, 7)}.csv`} className = 'btn btn-primary'>Download</CSVLink> : null }

                </form>
                <Table list = {this.state.list}/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        clinics: state.clinics,
    }
}

export default connect (mapStateToProps, { getClinics })(ListDailyUpdate)