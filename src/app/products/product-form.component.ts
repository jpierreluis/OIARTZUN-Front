import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  public product:Product = new Product();
  constructor(
    private productService:ProductService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.productService.getProduct(id).subscribe( (product)=>this.product=product)
      }
    })
  }

  public create():void{
    this.productService.create(this.product).subscribe(
      response=>this.router.navigate(['/productos'])
    );
  }

  public update():void{
    this.productService.update(this.product).subscribe(
      response=>this.router.navigate(['/productos'])
    );
  }

}
