import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

import './index.css';


ReactDOM.render(
        <Router>
            <div>
                <App />
            </div>
        </Router>,
    document.getElementById('root')
);