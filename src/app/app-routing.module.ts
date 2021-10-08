import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component404 } from './pages/404/404.component';

const routes: Routes = [
  {path:'404', component: Component404},
  {path:'', redirectTo:'products',pathMatch:'full'},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  {path:'**', redirectTo:'404',pathMatch:'full'} //cuando no encuentra la ruta, redirige a demo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
