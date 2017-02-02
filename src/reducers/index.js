import { combineReducers } from 'redux'
import { events } from './events'
import { isOpen } from './isOpen'

export default combineReducers({
    events,
    isOpen
})