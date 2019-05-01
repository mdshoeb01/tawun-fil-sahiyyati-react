import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getClinics } from '../../actions/clinic/main'
import { addDailyUpdate } from '../../actions/daily-update/main'
import { PopUp } from '../other/form-pop-up'

class AddDailyUpdate extends Component {
    constructor (props) {
        super(props);
        const now = new Date();
        const dMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
        const dYear = now.getFullYear();
        const dDate = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`;
        this.state = {
            date: `${dYear}-${dMonth}-${dDate}`,
            clinicId: '',
            totalPatients: '',
            amountCollected: '',
            redirect: false,
            success: false,
            failure: false,
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
        try {
            await addDailyUpdate(this.state)
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
            <form onSubmit = {this.handleSubmit}>
                {this.state.redirect ? <Redirect to = '/list-daily-update'/> : null}
                <div className = 'form-group'>
                    <label>Date</label>
                    <input type = 'date' className = 'form-control' name = 'date' value = {this.state.date} onChange = {this.handleChange}/>
                </div>
                <div className = 'form-group'>
                    <label>Clinic</label>
                    <select className = 'custom-select' name = 'clinicId' onChange = {this.handleChange}>
                        <option default>select</option>
                        { this.props.clinics.map((entry, index) => {
                         return ( <option value = {entry.id} key = {index}>{entry.name}</option> )
                        }) }
                    </select>
                </div>
                <div className = 'form-group'>
                    <label>Total Patients</label>
                    <input type = 'number' placeholder = '40' className = 'form-control' name = 'totalPatients' value = {this.state.totalPatients} onChange = {this.handleChange}/>
                </div>
                <div className = 'form-group'>
                    <label>Amount Collected</label>
                    <input type = 'number' placeholder = '300' className = 'form-control' name = 'amountCollected' value = {this.state.amountCollected} onChange = {this.handleChange}/>                    
                </div>
                { this.state.success ? <PopUp text = 'Entry successfull, Wait while you will be redirected' /> : null }
                { this.state.failure ? <PopUp text = 'Something went wrong' /> : null }
                <button type = 'submit' className = 'btn btn-primary'>Submit</button>
            </form>        
        )
    }
}

function mapStateToProps (state) {
    return {
        clinics: state.clinics,
    }
}

export default connect (mapStateToProps, { getClinics, addDailyUpdate })(AddDailyUpdate)