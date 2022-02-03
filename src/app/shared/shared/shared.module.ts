import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { ActorCardComponent } from '../components/actor-card/actor-card.component';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { SearchComponent } from '../components/search/search.component';
import { TrailerComponent } from '../components/trailer/trailer.component';

import { NgRatingBarModule } from 'ng-rating-bar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrailerComponent,
    SearchComponent,
    MovieCardComponent,
    ActorCardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NgRatingBarModule,
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    TrailerComponent,
    SearchComponent,
    MovieCardComponent,
    ActorCardComponent,
    HeaderComponent,
    NgRatingBarModule,
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
})
export class SharedModule {}
