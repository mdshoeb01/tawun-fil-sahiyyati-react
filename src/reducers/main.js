import { combineReducers } from 'redux'
import { clinics } from './clinics'
import { available } from './available'

export default combineReducers({
  clinics,
  available,
})
