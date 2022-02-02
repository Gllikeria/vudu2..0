import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './shared/components/header/header.component';
import { ActorCardComponent } from './shared/components/actor-card/actor-card.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { SearchComponent } from './shared/components/search/search.component';
import { TrailerComponent } from './shared/components/trailer/trailer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DetailsComponent } from './pages/details/details.component';

import { NgRatingBarModule } from 'ng-rating-bar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ActorCardComponent,
    MovieCardComponent,
    SearchComponent,
    TrailerComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgRatingBarModule,
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
