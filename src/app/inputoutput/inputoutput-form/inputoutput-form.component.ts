import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchFilter } from 'src/app/products/models/search-filter';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import { Inputoutput } from '../models/inputoutput';
import { ItemInputoutput } from '../models/item-inputoutput';
import { InputoutputService } from '../service/inputoutput.service';

@Component({
  selector: 'app-inputoutput-form',
  templateUrl: './inputoutput-form.component.html'
})
export class InputoutputFormComponent implements OnInit {
  public products:Array<Product> = [];
  public search:SearchFilter=new SearchFilter();
  public inputoutput:Inputoutput = new Inputoutput();
  constructor(
    private productService:ProductService,
    private router:Router,
    private inputoutputService:InputoutputService
    ) { }
  ngOnInit(): void {
  }

  selectProduct(product:Product):void{
    let exist:boolean = false;
    this.inputoutput.items.map(item=>{
      if(item.product.id === product.id){
        exist = true;
      }
    })
    if(!exist){
      let item:ItemInputoutput= new ItemInputoutput();
      item.product = product;
      this.inputoutput.items.push(item);
    }else{
      alert("¡El producto ya esta seleccionado!");
    }

  }

  allProduct():void{
    this.productService.getProducts().subscribe(response=>{
      this.products = response as Product[];
    });
  }
  
  searchData():void{
    this.productService.search(this.search).subscribe(response=>{
      this.products = response as Product[];
    });
  }

  remove(product:Product):void{
    this.removeItem(product);
  }

  verifyAmount(item:ItemInputoutput):void{
    console.log("Entra dentro de la verificacion");
    console.log(item);
    if(item.amount==0){
      this.removeItem(item.product);
    }
  }
  removeItem(product:Product):void{
    let i:number = 0;
    let seleccion:number = 0;
    this.inputoutput.items.map(item=>{
      if(item.product.id == product.id){
        seleccion = i;
      }
      i++;
    });
    this.inputoutput.items.splice(seleccion,1);
  }
  generate():void{
    this.inputoutputService.create(this.inputoutput).subscribe(response=>this.router.navigate(['/productos']));
  }
}
