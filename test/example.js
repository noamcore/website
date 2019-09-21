import './helper'
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../src/App'

describe('<App />', () => {
  it('call', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<main>A simple app</main>)).to.be.equal(true)
  })
})
