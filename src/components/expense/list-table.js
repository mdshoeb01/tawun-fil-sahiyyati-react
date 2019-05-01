import React from 'react'

const Table = (props) => {
    if (props.list.length === 0) return null;
    else return (
        <table className = 'table table-hover'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                { props.list.map((entry, index) => {
                    return (
                        <tr key = { index }>
                            <th>{ entry.date }</th>
                            <th>{ entry.description }</th>
                            <th>{ entry.amount }</th>
                            <th>{ entry.type }</th>
                            <th>{ entry.available }</th>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;