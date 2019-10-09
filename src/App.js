import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/js/all.js'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

export default () => (
  <React.Suspense fallback={<h1>Still loading...</h1>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </React.Suspense>
)
