import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.min.css'


const root = document.getElementById('root');
ReactDOM.render(
    <div>
        <App />
    </div>,
    root)
registerServiceWorker();
