import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <header className = 'mt-5 '>
        <ul className = 'nav justify-content-center'>
          <Link className = 'nav-item btn align-self-start' to = '/'><b>Expense Management Application</b></Link>
          <Link className = 'nav-item btn align-self-start' to = '/'>Home</Link>
          <li className = 'nav-item dropdown'>
            <button className = 'nav-link btn dropdown-toggle' data-toggle = 'dropdown' aria-haspopup = 'true' aria-expanded = 'false'>Clinics</button>
            <div className = 'dropdown-menu'>
              <Link className = 'nav-item btn' to = '/add-clinic'>Add clinic</Link>
              <Link className = 'nav-item btn' to = '/list-clinic'>List clinic</Link>
            </div>
          </li>
          <li className = 'nav-item dropdown'>
            <button className = 'nav-link btn dropdown-toggle' data-toggle = 'dropdown' aria-haspopup = 'true' aria-expanded = 'false'>Daily Updates</button>
            <div className = 'dropdown-menu'>
              <Link className = 'nav-item btn' to = '/add-daily-update'>Add Daily Update</Link>
              <Link className = 'nav-item btn' to = '/list-daily-update'>List Daily Update</Link>              
            </div>
          </li>
          <li className = 'nav-item dropdown'>
            <button className = 'nav-link btn dropdown-toggle' data-toggle = 'dropdown' aria-haspopup = 'true' aria-expanded = 'false'>Expenses</button>
            <div className = 'dropdown-menu'>
              <Link className = 'nav-item btn' to = '/add-expense'>Add Expenses</Link>
              <Link className = 'nav-item btn' to = '/list-expense'>List Expenses</Link>
            </div>
          
          </li>
          
        </ul>
      </header>
    )
  }
}
export default Header
