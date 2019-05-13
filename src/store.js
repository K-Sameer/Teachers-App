import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import { routerMiddleware } from 'connected-react-router';

export default function configureStore(history) {
  return createStore(
    rootReducer(history), {},
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger
      )
    )
  );
}