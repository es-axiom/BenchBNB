import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import BenchIndexContainer from './components/bench_index_container';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const Store = configureStore();
  ReactDOM.render(<Provider store={Store}>
                    <BenchIndexContainer />
                  </Provider>, root)
});
