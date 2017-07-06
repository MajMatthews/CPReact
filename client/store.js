import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types'

// import the root reducer
import rootReducer from './reducers/index';

import docs from './data/docs';

// create an object for the default data
const defaultState = {
  docs
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
