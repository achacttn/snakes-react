import React from 'react';
import ReactDOM from 'react-dom';
import Snake from './component/Snake';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Snake />, document.getElementById('root'));
registerServiceWorker();
