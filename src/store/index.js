import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from 'store/createRootReducer';

export const history = createBrowserHistory();

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(routerMiddleware(history)),
  devTools: process.env.NODE_ENV !== 'production',
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./createRootReducer', () => {
    const newCreateRootReducer = require('./createRootReducer').default;
    store.replaceReducer(newCreateRootReducer(history));
  });
}

export default store;