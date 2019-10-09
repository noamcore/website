import React from 'react'
import { Link } from 'react-router-dom'

const Nav = React.lazy(() => import('../components/Nav'))
const Footer = React.lazy(() => import('../components/Footer'))

export default () => {
  return (
    <>
      <React.Suspense fallback={<h1>Loading</h1>}>
        <Nav />
        <main>Portifólio pessoal</main>
        <li>
          <ul>Elixir</ul>
          <ul>React</ul>
          <ul>Vue</ul>
          <ul>Rust</ul>
        </li>
        <Link to="/about">ir para about</Link>
        <Footer />
      </React.Suspense>
    </>
  )
}
