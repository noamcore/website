import React from 'react'

import Nav from '../components/Nav'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-6">
        <main>
          <p className="presentation">Presentation</p>
          <Card title="Tecnologias atuais">
            <ul>
              <li>React</li>
              <li>Elixir</li>
              <li>Rust</li>
            </ul>
          </Card>
          <Card title="Stack atual">
            <ul>
              <li>Docker</li>
              <li>ConcourseCI</li>
              <li>Ubuntu</li>
              <li>AWS</li>
              <li>Google Cloud</li>
            </ul>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  )
}
