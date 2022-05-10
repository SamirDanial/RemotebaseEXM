import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader'
import { Provider } from "react-redux";
import store from './store/configurStore';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
applyPolyfills().then(() => {
    defineCustomElements(window)
})