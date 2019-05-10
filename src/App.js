import React from 'react';
import { createBrowserHistory } from 'history'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import StudentPage from './pages/StudentPage/StudentPage.js'
import TeacherPage from './pages/TeacherPage/TeacherPage.js'

const history = createBrowserHistory()

function App () {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => (<StudentPage/>)} />
        <Route path="/teacher-page" render={() => (<TeacherPage/>)} />
      </Switch>
    </Router>
  )
}

export default App
