import { Injectable } from '@nestjs/common';

const orders = [
  { id: '1', name: 'Order 1', price: 100 },
  { id: '2', name: 'Order 2', price: 200 },
  { id: '3', name: 'Order 3', price: 300 },
];

@Injectable()
export class OrdersService {
  getOrders() {
    return orders;
  }

  getOrder(id: string) {
    const orders = this.getOrders();

    return orders.find((order) => order.id === id);
  }

  updateOrder(id: string) {
    const orders = this.getOrders();

    const order = orders.find((order) => order.id === id);

    order.name = `Updated order ${id}`;
    order.price = Math.floor(Math.random() * 100);

    const indexOrder = orders.indexOf(order);

    orders[indexOrder] = order;

    return orders;
  }

  createOrder() {
    const orders = this.getOrders();

    const order = {
      id: `${orders.length + 1}`,
      name: `Order ${orders.length + 1}`,
      price: Math.floor(Math.random() * 100),
    };

    orders.push(order);

    return orders;
  }
}
