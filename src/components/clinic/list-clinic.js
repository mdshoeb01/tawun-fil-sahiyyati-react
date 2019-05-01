import React, { Component } from 'react'
import { getClinics } from '../../actions/clinic/main'
import { connect } from 'react-redux';

class ListClinic extends Component {
    componentDidMount () {
        this.props.getClinics();
    }
    render () {
        return (
            <div>
                {this.props.clinics.length !== 0 ? this.props.clinics.map((entry, index) => {
                    return (
                        <div className = 'card' key = {index}>
                            <div className = 'card-header'>Clinic Name: {entry.name}</div>
                            <div className = 'card-body'>
                                <p className = 'card-title'>Address: {entry.address}</p>
                            </div>    
                        </div>
                    )
                }) : <div className = 'text-monospace'>No Clinics Available</div> }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        clinics: state.clinics,
    }
}

export default connect (mapStateToProps, { getClinics })(ListClinic)