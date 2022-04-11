import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { OrderRoutingModule } from './order-routing.module';

// Modules
import { SharedModule } from './../shared/shared.module';

// Pages
import { OrderComponent } from './pages/order/order.component';

// Components
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { OrderLocationComponent } from './components/order-location/order-location.component';
import { AsidePriceComponent } from './components/aside-price/aside-price.component';

@NgModule({
  declarations: [BreadcrumbsComponent, OrderComponent, OrderLocationComponent, AsidePriceComponent],
  imports: [SharedModule, CommonModule, OrderRoutingModule],
  exports: [],
})
export class OrderModule {}
