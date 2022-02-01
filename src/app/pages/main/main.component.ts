import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private movie: MoviesService) {}
  popularMoviesArr: any = [];
  trendingMoviesArr: any = [];
  searchedMoviesArr: any = [];
  genresArr: any = []
  openTab: 'popular' | 'trending' | 'search' = 'popular';
  showSeachedMovies: boolean = false;
  firstSearch: boolean = true;
  pending: boolean = false;
  searchedMovieName: string = '';
  oldMovieName: string = '';

  ngOnInit(): void {
    this.movie
      .getGenres()
      .subscribe((data: any) => (this.genresArr = data.genres));
    this.popularMovies();
    this.trendingMovies()
  }
  trendingMovies() {
    this.movie
      .getTrendingMovies()
      .pipe(
        map((data: any) => {
          data.results.forEach((element: any) => {
            this.trendingMoviesArr.push(element);
          });
        })
      )
      .subscribe(data => this.movie.trendingMoviesPage++);
  }

  popularMovies(){
    this.movie
    .getPopularMovies()
    .pipe(
      map((data: any) => {
        data.results.forEach((element: any) => {
          this.popularMoviesArr.push(element);
        });
      })
    )
    .subscribe(data => this.movie.popularMoviesPage++);
  }
}
