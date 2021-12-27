import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

//Mount functions to start the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}


//If we are in development and in isolation,
//call mount immedaite
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot) {
        mount(devRoot)
    }
}



//If we are running through container (ie, PRODUCTION),
// then we should export the mount function
export {mount}