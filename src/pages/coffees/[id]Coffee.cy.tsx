import React from 'react'
import Coffee from './[id]'

describe('<Coffee />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Coffee />)
  })
})