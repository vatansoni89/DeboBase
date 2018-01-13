import { Component } from "@angular/core";
import { IProduct } from '../Interfaces/IProduct';

@Component({
    selector : 'product-list',
    templateUrl :'./product-list.component.html'
})
export class ProductListComponent{
    pageTitle:string = 'My Product-List';
    
  products: IProduct[] = [{
    Product: 'A',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 4
  },
  {
    Product: 'B',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 4
  },
  {
    Product: 'C',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 4
  }
  ];
}