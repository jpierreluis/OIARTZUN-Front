import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form.component';
import { InputoutputFormComponent } from './inputoutput/inputoutput-form/inputoutput-form.component';
const routes: Routes = [
  {path: 'productos', component: ProductsComponent},
  {path: 'productos/form', component: ProductFormComponent},
  {path: 'productos/form/:id', component: ProductFormComponent},
  {path: 'entradasalida/form', component: InputoutputFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
