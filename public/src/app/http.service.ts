import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAllCakes() {
    return this._http.get('/cakes')
  };

  createNewCake(cake) {
    return this._http.post('/createCake', cake);
  }

  deleteCake(id) {
    return this._http.delete('/cakes/' + id)
  }

  getCake(id){
    return this._http.get('/cakes/' + id);
  }

  createRating(id, rating) {
    return this._http.put('/createRating/' + id, rating)
  }

}
