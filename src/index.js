import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'

import './postcss/main.pcss'

import App from './App'
import withLoading from './components/withLoading'

const AppWithLoading = withLoading(App)

render(
  <>
    <BrowserRouter>
      <Route path="/" component={AppWithLoading} />
    </BrowserRouter>
  </>,
  document.getElementById('app')
)
