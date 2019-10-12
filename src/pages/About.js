import React from 'react'
const Nav = React.lazy(() => import('../components/Nav'))

export default () => (
  <>
    <React.Suspense fallback={<h1></h1>}>
      <Nav />
    </React.Suspense>
    <main>
      Desenvolvedor Web desde 2015, trabalho com as melhores stacks do mercado.
      Utilizando linguagens e ferramentas específicas para os diferentes tipos de problemas.
      Elixir, Node.js com React.

      Atualmente estudando também linguagens funcionais como Rust, Haskell.
    </main>
    <footer>Copyright &copy; Iago Sousa</footer>
  </>
)
