describe('Login Test', () => {
  const page = 'http://localhost:3000/auth/login';

  beforeEach(function () {
    cy.fixture('credentials').then((credentials) => {
      this.credentials = credentials;
    });
  });

  it('should log in successfully with valid credentials', function () {
    cy.visit(page);
    cy.get('input[name="email"]').type(this.credentials.email);
    cy.get('input[name="password"]').type(this.credentials.password);
    cy.get('button[type="button"]').click();
    cy.url().should('include', '/home');
  });

  it('should show an error with invalid email', function () {
    cy.visit(page);
    cy.get('input[name="email"]').type('invalid-email@example.com');
    cy.get('input[name="password"]').type(this.credentials.password);
    cy.get('button[type="button"]').click();
    cy.contains('Invalid email or password').should('be.visible');
  });

  it('should show an error with incorrect password', function () {
    cy.visit(page);
    cy.get('input[name="email"]').type(this.credentials.email);
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="button"]').click();
    cy.contains('Invalid email or password').should('be.visible');
  });

  it("shouldn't allow login button click with empty email", function () {
    cy.visit(page);
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('input[name="password"]').type(this.credentials.password);
    cy.get('button[type="button"]').should('be.disabled');
  });

  it("shouldn't allow login button click with empty password", function () {
    cy.visit(page);
    cy.get('input[name="email"]').type(this.credentials.email);
    cy.get('input[name="password"]').should('have.value', '');
    cy.get('button[type="button"]').should('be.disabled');
  });
});
