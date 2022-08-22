import { Controller, Get, Param, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Get('/:id')
  getOrder(@Param('id') id: string) {
    return this.ordersService.getOrder(id);
  }

  @Put('/:id')
  updateOrder(@Param('id') id: string) {
    console.log(id);
    return this.ordersService.updateOrder(id);
  }
}
