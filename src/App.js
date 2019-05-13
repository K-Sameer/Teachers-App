import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './store';
import { createBrowserHistory } from 'history';

import StudentPage from './pages/StudentPage/StudentPage.js'
import TeacherPage from './pages/TeacherPage/TeacherPage.js'

export const history = createBrowserHistory();

function App () {
  return (
    <Provider store={configureStore(history)}>
      <ConnectedRouter history={history}> 
        <Router>
          <Switch>
            <Route exact path="/" render={() => (<StudentPage/>)} />
            <Route path="/teacher-page" render={() => (<TeacherPage/>)} />
          </Switch>
        </Router>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
