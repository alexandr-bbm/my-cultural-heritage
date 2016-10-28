import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const wrappedApp =
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>;

import './styles/main.scss';

ReactDOM.render(wrappedApp, document.getElementById('content-entry'));