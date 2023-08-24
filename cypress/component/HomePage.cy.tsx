import Home from "@/app/page"

describe('HomePage.cy.tsx', () => {
  it('loads', () => {
    cy.mount(<Home/>)
  })
})