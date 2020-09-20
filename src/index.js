import React from 'react';
import { render } from 'react-dom';
import { TicketApp } from './TicketApp';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <React.StrictMode>
    <TicketApp />
  </React.StrictMode>,
  document.getElementById('root')
);
