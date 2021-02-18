import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "./product";
import { map } from 'rxjs/operators';
import { SearchFilter } from './models/search-filter';

@Injectable()
export class ProductService{
    private urlEndPoint:string = 'http://localhost:8080/api/products';
    
    private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    
    constructor(private http: HttpClient){
    }
    
    getProducts(): Observable<Product[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(respose=>respose as Product[])
        );
    }

    getProductsById(id:number): Observable<Product[]>{
        return this.http.get(this.urlEndPoint+'/'+id).pipe(
            map(respose=>respose as Product[])
        );
    }

    create(product:Product):Observable<Product>{
        return this.http.post<Product>(this.urlEndPoint,product,{headers:this.httpHeaders});
    }

    getProduct(id:number):Observable<Product>{
        return this.http.get<Product>(this.urlEndPoint+"/show/"+id);
    }

    update(product:Product):Observable<Product>{
        return this.http.put<Product>(this.urlEndPoint+"/"+product.id,product,{headers:this.httpHeaders});
    }

    destroy(product:Product):Observable<Product>{
        return this.http.delete<Product>(this.urlEndPoint+"/"+product.id,{headers:this.httpHeaders});
    }

    search(search:SearchFilter): Observable<Product[]>{
        return this.http.post(this.urlEndPoint+'/search',search,{headers:this.httpHeaders}).pipe(
            map(respose=>respose as Product[])
        );
    }



}