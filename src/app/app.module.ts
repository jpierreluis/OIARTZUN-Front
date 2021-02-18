import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';
import { ProductService } from './products/product.service';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './products/product-form.component';
import { InputoutputFormComponent } from './inputoutput/inputoutput-form/inputoutput-form.component';
import { InputoutputService } from './inputoutput/service/inputoutput.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    ProductFormComponent,
    InputoutputFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    InputoutputService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
