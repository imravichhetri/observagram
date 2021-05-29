import React from 'react';
import ReactDOM from 'react-dom';
import App from '@observagram/App';

import 'unfetch/polyfill';

import '@observagram/styles.scss';

ReactDOM.render(<App />, document.getElementById('app'));
