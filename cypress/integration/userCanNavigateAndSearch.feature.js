describe("when app renders", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film**", {
      fixture: "movieResponse.fixture.json",
      status: 200,
    });
    cy.visit("/");
  });
  it("is expected to render site", () => {
    cy.get("[data-cy=header]").should("have.text", "Movie Index");
  });
});
