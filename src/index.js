import React from 'react';
// This helps connect our react application to public.html
import ReactDom from 'react-dom'

import App from  './components/App'

ReactDom.render(<App />, document.getElementById('root'));