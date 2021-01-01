import pickRover from './pickRover'
import setDate from './setDate'
// import CallServer from './callServer'


import { combineReducers } from 'redux'

// Main Reducer

const allReducers = combineReducers({
    RoverChosen: pickRover,
    imageDate: setDate,
    // CallServer: CallServer
})

export default allReducers