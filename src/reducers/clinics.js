import {
  GETCLINICS,
} from '../actions/clinic/main'

export const clinics = ((state = [], action) => {
  switch (action.type) {
    case GETCLINICS: //change here
      return Object.assign([], state, action.payload)
    default: return state
  }
})
