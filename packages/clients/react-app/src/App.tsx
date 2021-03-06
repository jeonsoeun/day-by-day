import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import MemoEditor from './pages/MemoEditor'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/editor">
            <MemoEditor />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
