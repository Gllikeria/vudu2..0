import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private movie: MoviesService, private router: Router) {}
  popularMoviesArr: any = [];
  trendingMoviesArr: any = [];
  genresArr: any = [];
  openTab: 'popular' | 'trending' | 'search' = 'popular';

  genresSub = new Subscription();
  trendingMoviesSub = new Subscription();
  popularMoviesSub = new Subscription();
  ngOnInit(): void {
    this.genresSub = this.movie
      .getGenres()
      .subscribe((data: any) => (this.genresArr = data.genres));
    this.popularMovies();
    this.trendingMovies();
  }
  trendingMovies() {
    this.trendingMoviesSub = this.movie
      .getTrendingMovies()
      .pipe(
        map((data: any) => {
          data.results.forEach((element: any) => {
            this.trendingMoviesArr.push(element);
          });
        })
      )
      .subscribe((data) => {
        this.movie.trendingMoviesPage++;
      });
  }

  popularMovies() {
    this.popularMoviesSub = this.movie
      .getPopularMovies()
      .pipe(
        map((data: any) => {
          data.results.forEach((element: any) => {
            this.popularMoviesArr.push(element);
          });
        })
      )
      .subscribe((data) => this.movie.popularMoviesPage++);
  }
  openDetails(id: any) {
    this.router.navigate(['/details', id]);
  }
  ngOnDestroy(): void {
    this.movie.trendingMoviesPage = 1;
    this.movie.popularMoviesPage = 1;
    this.genresSub.unsubscribe();
    this.trendingMoviesSub.unsubscribe();
    this.popularMoviesSub.unsubscribe();
  }
}
