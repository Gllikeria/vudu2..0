import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  private _key = '64cc73a2c7f8837f74edf76b0b7883c9';
  searchedMoviePage: number = 1;

  getSearchedMovie(searchWord:string){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this._key}&language=en-US&query=${searchWord}&page=${this.searchedMoviePage}&include_adult=false`)
  }
}

