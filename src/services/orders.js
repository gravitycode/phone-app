import phoneServices from './phones';
import ValidationException from '../exceptions/validation-exception';
import _ from 'lodash';

/**
 * Order services
 */
class OrderServices {

  constructor() {
    this.orders = [];
  }

  /**
   * Receives and order that contains the customer information name, surname, and email,
   * and the list of phones that the customer wants to buy
   **/
  create(order) {
    let totalPrice = 0;
    const phones = phoneServices.find();

    if (this.checkPhones(order, phones)) {
      totalPrice = phones
        .filter(phone => order.phones.includes(phone.id))
        .reduce((accumulator, p) => {
          return accumulator + p.price;
        }, 0);
      this.orders.push({...order, totalPrice});
      console.log(`Order created-> Client: ${order.name} Email: ${order.email} Total price: ${totalPrice}€`);
    }

    return totalPrice;
  }

  /**
   * Comprueba si el telefono existe en el inventario
   * @param order
   * @param stock
   * @returns {*}
   */
  checkPhones(order, stock) {
    if (!order.phones || order.phones.length === 0) {
      throw new ValidationException();
    }
    const stockIds = _.map(stock, 'id');
    order.phones.forEach(phoneId => {
      if (!stockIds.includes(phoneId)) {
        console.log(`Telefono ${phoneId} no encontrado en el stock`);
        throw new ValidationException();
      }
    });
    return true;
  }

}

export default new OrderServices();