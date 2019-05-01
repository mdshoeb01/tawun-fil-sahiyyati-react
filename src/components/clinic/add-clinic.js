import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { addClinic, getClinics } from '../../actions/clinic/main'
import { connect } from 'react-redux';
import { PopUp } from '../other/form-pop-up'

class AddClinic extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            success: false,
            redirect: false,
            failure: false,
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = async (e) => {
        e.preventDefault();
        try {
            await addClinic(this.state);
            await this.props.getClinics();
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
            <form onSubmit = {this.submitForm}>
                { this.state.redirect ? <Redirect to = '/list-clinic'/> : null }
                <div className = 'form-group'>
                    <label>Clinic Name</label>
                    <input type = 'text' onChange = {this.handleChange} name = 'name' className = 'form-control'></input>
                </div>
                <div className = 'form-group'>
                    <label>Clinic Adress</label>
                    <input type = 'text' name = 'address' onChange = {this.handleChange} className = 'form-control'></input>
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

export default connect(mapStateToProps, { getClinics})(AddClinic)