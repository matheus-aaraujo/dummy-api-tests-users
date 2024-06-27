Cypress.Commands.add("makeRequest", (Url, Method, Headers, Body) => {
    cy.request({
        url: Url,
        method: Method,
        headers: Headers,
        body: Body,
        failOnStatusCode: false,
    })
    .then((res) => res);
});