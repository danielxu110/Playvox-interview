export type Booking = {
    firstname?: string;
    lastname?: string;
    totalprice?: number | string;
    depositpaid?: boolean;
    bookingdates?: {
      checkin: string;
      checkout: string;
    };
    additionalneeds?: 'Breakfast';
  };