import { applyMiddleware, combineReducers, createStore } from 'redux'
import Immutable from 'immutable'
import { routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducer'

// state日志
const logger = createLogger({
    stateTransformer: (state) => {
        return Immutable.fromJS(state).toJS()
    },
})

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer,
    }),
    process.env.NODE_ENV === 'production' ? applyMiddleware(thunkMiddleware) : applyMiddleware(thunkMiddleware, logger),
)

export default store
