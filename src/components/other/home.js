import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAvailable } from '../../actions/available/main'

class Main extends Component {
  componentDidMount () {
    this.props.getAvailable();
  }
  render() {
    return (
      <div>
        { this.props.available.length !== 0 ? <div className = 'mb-4 text-monospace'>Available Balance : { new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.props.available[0].available) }</div> : null }
        <div className = 'text-monospace'>Welcome to the Health-Care Management Application</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    available: state.available,
  }
}

export default connect(mapStateToProps, { getAvailable }) (Main)