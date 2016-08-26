import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const Root =
    <root store={configureStore()}>
      <Provider store={store}>
        <BenchIndexContainer />
      </Provider>
    </root>
  ReactDOM.render(<Root />, root)
});
