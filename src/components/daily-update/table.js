import React from 'react'

const Table = (props) => {
    if (props.list.length === 0) return null;
    else return (
        <table className = 'table table-hover'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Total Patients</th>
                    <th>Amount Collected</th>
                    <th>Clinic Name</th>
                </tr>
            </thead>
            <tbody>
                { props.list.map((entry, index) => {
                    return (
                        <tr key = { index }>
                            <th>{ entry.date }</th>
                            <th>{ entry.totalPatients }</th>
                            <th>{ entry.amountCollected }</th>
                            <th>{ entry.clinicName }</th>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;