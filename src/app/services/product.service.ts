import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public _http: HttpClient) { }

  allProductos(){
    let token = {
      "access-token":"wt2IijtzPWfcEQ1YT-1JFA",
      "client":"DSVFcF38tV22QzulhfLx1g",
      "uid":"max@gmail.com"
    };
    let url = "http://localhost:3001/api/admin/visions";
    return this._http.get(url, {
      headers: token
    });

  }
}
