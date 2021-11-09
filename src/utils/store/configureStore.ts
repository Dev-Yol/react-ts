import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { app, app_store } from 'utils/reducers';
import loggerMiddleware from 'utils/middleware/loggerMiddleware'

const reducer = combineReducers({ app, app_store });

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(loggerMiddleware),
  // other store enhancers if any
));

export default store