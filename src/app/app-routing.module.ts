import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './view/cart/cart.component';
import { ProductDetailsComponent } from './view/product-details/product-details.component';
import { ProductListComponent } from './view/product-list/product-list.component';
import { ShippingComponent } from './view/shipping/shipping.component';

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent
  },
  {
    path: "product/:productId",
    component: ProductDetailsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "shipping",
    component: ShippingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
