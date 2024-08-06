import { Booking } from '../types';
import { generateBooking } from '../support/utils/data';

const errorBook: Booking = {
    firstname : null,
    lastname : "Brown",
    totalprice : 'abd',
    depositpaid : true,
    bookingdates : {
        checkin : "2019-01-01",
        checkout : "2018-01-01"
    },
    additionalneeds : "Breakfast"
};

beforeEach('creates a new token', () => {
  const username: string = 'admin';
  const password: string = 'password123';
  cy.createToken(username, password);
});

describe('API TEST - POST, GET', () => {
  let bookingId: number;

  it('creates a new booking - POST', () => {
    const newBooking: Booking = generateBooking();
    let bookInformation: string;

    cy.createBooking(newBooking).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.have.property('bookingid');
      bookingId = body.bookingid;
      bookInformation = JSON.stringify(body);
      cy.log(`Booking's ID: ${body.bookingid}`);
      cy.log(`Book Information: ${bookInformation}`)
    });
  });

  it('creates a new booking with 500 error - POST', () => {
    const newBooking: Booking = errorBook;
    cy.createBooking(newBooking).then(({ status }) => {
        expect(status).to.eq(500);
    });  
  });

  it('gets the booking by id - GET', () => {
    cy.getBooking(bookingId).then(({ status }) => {
        expect(status).to.eq(200);
    });
  });
});