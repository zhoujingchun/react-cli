import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import App from 'Components/app'
import Login from 'Components/login/index'
import Dialog from 'Components/dialog/container'
import config from '@/conf'

const {
    url: { app, login, root },
} = config

const Root: React.FC = function () {
    return (
        <>
            <Switch>
                <Route path={app.root.path} component={App} />
                <Route path={login.path} component={Login} />
                <Route path={root} exact render={() => <Redirect to={login.path} />} />
            </Switch>
            <Dialog />
        </>
    )
}

export default Root
