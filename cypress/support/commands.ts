import { Booking } from '../types';

Cypress.Commands.add('login', (username: string = 'Admin', password: string = 'admin123') => {
    cy.session([username, password], () => {
        cy.visit('/web/index.php/auth/login');
        cy.get('[name="username"]').clear().type(username);
        cy.get('[name="password"]').clear().type(password);
        cy.get('.orangehrm-login-button').click();
        cy.url().should('include', 'dashboard/index');
    },
    {
        cacheAcrossSpecs: true,
    })
});

const apiUrl: string = 'https://restful-booker.herokuapp.com';
const createToken = (username: string, password: string): Cypress.Chainable<void> => {
    return cy.session([username, password], () => {
      cy.request({
        method: 'POST',
        url: apiUrl + '/auth',
        body: {
          username: username,
          password: password
        }
      }).then((response) => {
        const body: { token: string } = response.body;
        cy.setCookie('token', body.token);
      });
    });
  };
  
  const getBooking = (
    bookingId: number,
    qs?: { firstname?: string; lastname?: string; checkin?: string; checkout?: string }
  ): Cypress.Chainable<Cypress.Response<Booking>> => {
    return cy.request({
      method: 'GET',
      url: apiUrl + `/booking/${bookingId}`,
      qs: qs
    });
  };
  
  const createBooking = (
    booking: Booking
  ): Cypress.Chainable<
    Cypress.Response<{
      bookingid: number;
      booking: Booking;
    }>
  > => {
    return cy.request({
      method: 'POST',
      url: apiUrl + '/booking',
      failOnStatusCode: false,
      body: booking
    });
  };
  
  Cypress.Commands.add('createToken', createToken);
  Cypress.Commands.add('getBooking', getBooking);
  Cypress.Commands.add('createBooking', createBooking);
  
  declare global {
    namespace Cypress {
      interface Chainable {
  
        createToken: typeof createToken;
        getBooking: typeof getBooking;
        createBooking: typeof createBooking;
      }
    }
  }
  
  export {};