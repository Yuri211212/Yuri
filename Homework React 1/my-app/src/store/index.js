import { combineReducers } from 'redux'
import { taskReducer } from './todos'

export const rootReducer = combineReducers({
taska:taskReducer  
}
)