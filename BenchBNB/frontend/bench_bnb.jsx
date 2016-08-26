import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestBenches } from './actions/bench_actions';
import { fetchBenches } from './util/bench_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  window.requestBenches = requestBenches;
  window.fetchBenches = fetchBenches;
  const root = document.getElementById("root");
  ReactDOM.render(<div>Hey There</div>, root)
});
