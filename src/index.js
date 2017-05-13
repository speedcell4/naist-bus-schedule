// @flow

import React from 'react';
import { render } from 'react-snapshot';
import App from './components/App';
import BusScheduleService from './services/BusScheduleService';

const busSchedule = new BusScheduleService();

render(
  <App busScheduleService={busSchedule} />,
  document.getElementById('react-root')
);
