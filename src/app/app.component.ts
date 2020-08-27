import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  lead:string;
   constructor(){
     this.title='Food App';
     this.lead="Ordering Food,has never been easier";
   }
  public myTitle :string='Hello world';
}
