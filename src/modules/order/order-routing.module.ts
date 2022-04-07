import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './pages/order/order.component';
import { OrderLocationComponent } from './components/order-location/order-location.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'location',
  },
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'location',
        component: OrderLocationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
