import { Component, NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { FilterPipe }from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Joe's bikes";
  
  selected_products: { bikeName: string; 
  bikeId: number; bikeCode: string;
  releaseDate: string; category: string; 
  price: number; starRating: number; 
  imageUrl: string; selected: boolean; }[];

  // category:string;
  searchText:string = "";
  // selected_count:number = 0;
  showImage: boolean = true;
  imageWidth: number = 50;
  imageMargin: number = 2;
 
  // Objects to List Products
  products = [
    {
      bikeName:'MTB bike',
      bikeId:1,
      bikeCode: 'MTB-0020',
      releaseDate: 'March 18, 2016',
      category: 'mens',
      price: 532.99,
      starRating: 3.0,
      imageUrl:'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png',
      selected:true
    },
    {
      bikeId: 2,
      bikeName: 'Kids bike',
      bikeCode: 'KB-3045',
      releaseDate: 'October 28, 2016',
      description: 'Kids bike with stabalizers',
      category: 'kids',
      price: 250.00,
      starRating: 1,
      imageUrl: 'https://openclipart.org/image/2400px/svg_to_png/177214/bike-kid.png',
      selected:true
    }, 
    {
      bikeName:'MTB bike',
      bikeId:3,
      bikeCode: 'MTB-0030',
      releaseDate: 'June 15, 2017',
      category: 'womens',
      price: 515.99,
      starRating: 4.0,
      imageUrl: 'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png',
      selected:true,     
    }   
  ]
  // Getting Selected products 
  getSelected(){
     this.selected_products =  this.products.filter( s => {
          return s.selected;
        });
    //  this.selected_count = this.selected_products.length;  
  }
  constructor(){
    this.getSelected();
  }
  toggleImage():void{
    this.showImage = !this.showImage;
}
}