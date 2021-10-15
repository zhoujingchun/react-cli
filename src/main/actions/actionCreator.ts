import { createAction } from 'redux-actions'
import { createActions } from 'framework'

import actionTypes from './actionTypes'

const actionCreator = createActions({
    showDialog: createAction(actionTypes.SHOWDIALOG_COMMON),
    getUserInfo: {
        url: '/api/user',
        method: 'get',
    },
})

export default actionCreator
