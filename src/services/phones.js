
/**
 * Phone services
 */
class PhoneServices {

  constructor() {
    this.phones = [{
      id:1,
      name: "Iphone X",
      description: "Teléfono Iphone X 256GB",
      price: 1150,
      image: "iphone-x.jpg"
    },
      {
        id:2,
        name: "Samsung Galaxy",
        description: "Teléfono Samsung Galaxy",
        price: 960,
        image: "samsung-galaxy.jpg"
      }
    ];
  }

  find() {
    return this.phones;
  }

}

export default new PhoneServices();