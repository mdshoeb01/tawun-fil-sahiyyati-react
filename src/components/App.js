import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/main'

import Header from './other/header'

import Home from './other/home'
import ListClinic from './clinic/list-clinic'
import AddClinic from './clinic/add-clinic'
import AddDailyUpdate from './daily-update/add-daily-update'
import ListDailyUpdate from './daily-update/list-daily-update'
import AddExpense from './expense/add-expense'
import ListExpense from './expense/list-expense'

import Footer from './other/footer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
)

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className = 'main d-flex flex-column justify-content-between align-items-center'>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact
              path = '/'
              render = {() => <Home/> }
            />
            <Route exact
              path = '/add-clinic'
              component = {AddClinic}
            />
            <Route exact
              path = '/list-clinic'
              component = {ListClinic}
            />
            <Route exact
              path = '/add-daily-update'
              component = {AddDailyUpdate}
            />
            <Route exact
              path = '/list-daily-update'
              component = {ListDailyUpdate}
            />
            <Route exact
              path = '/add-expense'
              component = {AddExpense}
            />
            <Route exact
              path = '/list-expense'
              component = {ListExpense}
            />
          </Switch>
          <Footer/>
        </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
