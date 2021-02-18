import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Inputoutput } from '../models/inputoutput';

@Injectable()
export class InputoutputService{
    private urlEndPoint:string = 'http://localhost:8080/api/inputoutput';
    
    private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    
    constructor(private http: HttpClient){
    }
    create(inputoutput:Inputoutput):Observable<Inputoutput>{
        return this.http.post<Inputoutput>(this.urlEndPoint,inputoutput,{headers:this.httpHeaders});
    }

}