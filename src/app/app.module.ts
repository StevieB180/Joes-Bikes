import {FontAwesomeModule} from'@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';

import { AppComponent } from './app.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

library.add(faStar);

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    StarRatingComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }