import React from 'react'
const Nav = React.lazy(() => import('../components/Nav'))

export default () => (
  <>
    <React.Suspense fallback={<h1></h1>}>
      <Nav />
    </React.Suspense>
    <main>About</main>
    <li>
      <ul>Elixir</ul>
      <ul>React</ul>
      <ul>Vue</ul>
      <ul>Rust</ul>
    </li>
    <footer>Copyright &copy; Iago Sousa</footer>
  </>
)
