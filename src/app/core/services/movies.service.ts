import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private _key = '64cc73a2c7f8837f74edf76b0b7883c9'
  popularMoviesPage: number = 1;
  trendingMoviesPage: number = 1;

  getPopularMovies(){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this._key}&language=en-US&page=${this.popularMoviesPage}`)
  }
  getTrendingMovies(){
    return this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this._key}`)
  }

  getMovieImg(imgUrl:string){
    return this.http.get(`https://image.tmdb.org/t/p/w500/${imgUrl}`)
  }
  getMovieDetils(id:string|null|undefined){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this._key}&language=en-US`)
  }
  getGenres(){
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this._key}&language=en-US`)
  }
}
