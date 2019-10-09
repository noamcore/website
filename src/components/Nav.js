import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const timeout = 300

export default () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <header>
      <nav className="flex w-full p-2 justify-between items-center">
        <p>Iago Sousa</p>
        <span onClick={() => setMenuVisible(visible => !visible)}>
          <i className="fas fa-bars fa-lg"></i>
        </span>
      </nav>
      <CSSTransition in={menuVisible} timeout={timeout} classNames="fade">
        {menuVisible ? (
          <div className="flex flex-col items-center">
            <a href="/">Página inicial</a>
            <a href="/">Projetos</a>
          </div>
        ) : (
          <></>
        )}
      </CSSTransition>
    </header>
  )
}
