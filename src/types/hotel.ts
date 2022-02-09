export interface Hotel {
  id: number;
  name: string;
  location: Location;
  starts: number;
  checkIn: Check;
  checkOut: Check;
  contact: Contact;
  gallery: Array<string>;
  userRating: number;
  price: number;
  currency: string;
}

interface Location {
  address: string;
  city: string;
  latitutde: number;
  longitude: number;
}

interface Check {
  from: string;
  to: string;
}

interface Contact {
  phoneNumber: string;
  email: string;
}
