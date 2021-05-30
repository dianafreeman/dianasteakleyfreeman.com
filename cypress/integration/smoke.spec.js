describe("Smoke Tests", () => {
  describe("visiting '/'", () => {
    beforeEach(() => cy.visit("/"));
    it("should land on the home page", () => {
      cy.location().should((location) => {
        expect(location.pathname).to.eq("/");
      });
    });
  });
  describe("visiting '/admin'", () => {
    beforeEach(() => cy.visit("/admin"));
    it("should land on the admin page", () => {
      cy.location().should((location) => {
        expect(location.pathname).to.include("/admin/");
      });
    });
  });
  describe("visiting a non-existent page  ", () => {
    beforeEach(() =>
      cy.visit("/this-page-does-not-exist", { failOnStatusCode: false })
    );
    it("should show a 404 page", () => {
      cy.title().should("include", "Not Found");
    });
  });
});
