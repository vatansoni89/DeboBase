import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {star} from './shared/StarRating/star.component';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    star
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
