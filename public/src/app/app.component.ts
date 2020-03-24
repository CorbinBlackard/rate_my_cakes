import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes: any;
  newCake: any;
  newRating: any;
  show_cakes: object;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getCakes();
    this.newCake = { name: "", image: ""}
    this.newRating = { comment: "", rating: ""}
  };

  getCakes() {
    let observable = this._httpService.getAllCakes();
    observable.subscribe(data => {
      console.log('Got our cakes!', data);
      this.cakes = data;
    })
  };

  createCake() {
    let observable1 = this._httpService.createNewCake(this.newCake)
    observable1.subscribe(data => {
      console.log("got the variable", data);
    })
    this.getCakes()
  };

  showCake(id){
    let observable2 = this._httpService.getCake(id);
    observable2.subscribe(data => {
      console.log("Got cake by ID!", data);
      this.show_cakes = data.cake;
      console.log(this.show_cakes)
    })
    this.getCakes();
  };

  deleteCake(id) {
    this._httpService.deleteCake(id).subscribe(data => {
      console.log("You deleted your task", data);
      this.getCakes();
    })
  };

  createRating(id, rating) {
    this._httpService.createRating(id, rating).subscribe(data => {
      console.log("You created a comment!", data);
    })
    this.getCakes();
  }

}
