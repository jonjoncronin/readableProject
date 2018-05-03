import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { fetchCategories } from './actions/category_actions';
import { fetchPosts } from './actions/post_actions';

const store = configureStore();

store.dispatch(fetchCategories())
.then(() => {
  store.dispatch(fetchPosts())
  .then(() => {
    console.log("Store state:", store.getState());
  })
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
