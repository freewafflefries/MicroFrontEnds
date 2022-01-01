import React from 'react';
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App'

//Mount functions to start the app
const mount = (el, {onSignIn, onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn}/>,
        el
    )

    return {
        onParentNavigate({pathname: nextPathname}) {
            const {pathname} = history.location

            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}


//If we are in development and in isolation,
//call mount immedaite
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root')

    if(devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()})
    }
}



//If we are running through container (ie, PRODUCTION),
// then we should export the mount function
export {mount}