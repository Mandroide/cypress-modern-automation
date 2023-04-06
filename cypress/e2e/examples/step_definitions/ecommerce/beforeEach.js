beforeEach( () => {
    cy.fixture("example", {log: false}).then(data => {
        globalThis.data = data
    })
})