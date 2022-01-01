import {createApp} from 'vue'
import Dashboard from './components/Dashboard.vue'

//Mount functions to start the app
const mount = (el) => {
    
    const app = createApp(Dashboard)
    app.mount(el)

    
}


//If we are in development and in isolation,
//call mount immedaite
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root')

    if(devRoot) {
        mount(devRoot)
    }
}



//If we are running through container (ie, PRODUCTION),
// then we should export the mount function
export {mount}