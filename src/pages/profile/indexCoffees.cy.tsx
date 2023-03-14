import React from 'react'
import Coffees from './index'

describe('<Coffees />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Coffees />)
  })
})