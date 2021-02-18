import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  public products:Product[]=[];
  public id:number=0;
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(response=>{
      this.products = response as Product[];
    });
  }
  buscar(){
    if(this.id!=0 && this.id!=null){
      this.productService.getProductsById(this.id).subscribe(response=>{
        this.products=response as Product[];
      });
    }else{
      alert("agregar un numero");
    }
  }

  limpiar(){
    this.id=0;
    this.productService.getProducts().subscribe(response=>{
      this.products = response as Product[];
    });
  }


  destroy(product:Product):void{
    if(confirm("Deseas eliminar este producto ?")){
      this.productService.destroy(product).subscribe();
      this.products = this.products.filter(prod=> prod!==product);
    }
  }

  
}
