import { Component } from "@angular/core";
import { IProduct } from '../Interfaces/IProduct';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  filterInput:string = 'A';
  isImageDisplayed: boolean = false;
  pageTitle: string = 'My Product-List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  products: IProduct[] = [{
    Product: 'A',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 4,
    url: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  },
  {
    Product: 'B',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 4,
    url: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  },
  {
    Product: 'C',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 4,
    url: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  }
  ];

  Submit(): void {
    this.isImageDisplayed = !this.isImageDisplayed;
  };
}