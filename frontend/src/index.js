import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';

import './styles/main.scss';

render(<App className="app" />, document.getElementById('content-entry'));