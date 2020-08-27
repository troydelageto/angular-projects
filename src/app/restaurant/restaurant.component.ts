import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  resTitle="My Restaurant";

  // public myTitle :string="Hello world";

  title :string;
  lead:string;
   constructor(){
     this.title='Food App';
     this.lead="Ordering Food,has never been easier";
   }

  ngOnInit(): void {
  }

}
