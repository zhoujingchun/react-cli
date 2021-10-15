import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from 'Components/root'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'antd/dist/antd.css'
import './css/index.scss'

if (module && module.hot) {
    module.hot.accept()
}
const history = createBrowserHistory()
ReactDOM.render(
    <Provider store={store}>
        <Router basename='/'>
            <Root />
        </Router>
    </Provider>,
    document.querySelector('#root'),
)
// ReactDOM.render(<App name='5555' age={25} />, document.querySelector('#root'));
