import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../search/search'
import About from '../about/about'

export default props => (
  <Router history={hashHistory}>
    <Route path="/search" component={Todo} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/search" />
  </Router>
)