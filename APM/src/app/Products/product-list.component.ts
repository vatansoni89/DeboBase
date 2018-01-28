import { Component } from "@angular/core";
import { IProduct } from '../Interfaces/IProduct';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  
  _textInput:string = '';
  isImageDisplayed: boolean = false;
  pageTitle: string = 'My Product-List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  FilterList: IProduct[];

  constructor()
  {
    
    this.FilterList = this.products;
    this.textInputForFilter='';

  }

  
  public get textInputForFilter(): string {
    return this._textInput;
    
  }

  
  public set textInputForFilter(val1: string) {
   
    this._textInput= val1;
    this.FilterList = this.textInputForFilter ? this.getFilteredProduct(this.textInputForFilter) :  this.products;
    
  }
  
  getFilteredProduct(input : string):IProduct[]{
    return this.products.filter(x=>x.Product.toLocaleLowerCase().indexOf(input.toLocaleLowerCase())!=-1)
  };

  products: IProduct[] = [{
    Product: 'A',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 1,
    url: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  },
  {
    Product: 'B',
    Available: true,
    Code: 125,
    Price: 100,
    Rating: 2,
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