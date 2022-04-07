import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { OrderRoutingModule } from './order-routing.module';

// Modules
import { SharedModule } from './../shared/shared.module';

// Pages
import { OrderComponent } from './pages/order/order.component';

// Components
import { BreadcrumbsComponent } from './../../app/components/breadcrumbs/breadcrumbs.component';
import { OrderLocationComponent } from './components/order-location/order-location.component';

@NgModule({
  declarations: [BreadcrumbsComponent, OrderComponent, OrderLocationComponent],
  imports: [SharedModule, CommonModule, OrderRoutingModule],
  exports: [OrderComponent],
})
export class OrderModule {}
