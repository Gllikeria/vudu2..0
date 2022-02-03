import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  Subscription,
  switchMap,
} from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { SearchService } from 'src/app/core/services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  genresArr: any = [];
  searchedMoviesArr: any = [];
  mform: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  searchedSub = new Subscription();
  genresSub = new Subscription();
  constructor(
    private search: SearchService,
    private movie: MoviesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.genresSub = this.movie
      .getGenres()
      .subscribe((data: any) => (this.genresArr = data.genres));
    this.searchMovie();
  }
  searchMovie() {
    this.searchedSub = this.mform.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged((previous, current) => {
          if (!current.name.length) {
            this.searchedMoviesArr = [];
            return true;
          }
          if (JSON.stringify(previous) !== JSON.stringify(current)) {
            this.searchedMoviesArr = [];
            this.search.searchedMoviePage = 1;
            return false;
          } else return true;
        }),
        switchMap((id: any) => {
          return this.search.getSearchedMovie(id.name);
        }),
        map((data: any) => {
          data.results.forEach((element: any) => {
            this.searchedMoviesArr.push(element);
          });
        })
      )
      .subscribe((newValue: any) => {
        this.search.searchedMoviePage++;
      });
  }
  addMovies() {
    this.searchedSub = this.search
      .getSearchedMovie(this.mform.value.name)
      .pipe(
        map((data: any) => {
          data.results.forEach((element: any) => {
            this.searchedMoviesArr.push(element);
          });
        })
      )
      .subscribe((data) => this.search.searchedMoviePage++);
  }
  openDetails(id: any) {
    this.router.navigate(['/details', id]);
  }
  ngOnDestroy(): void {
    this.search.searchedMoviePage = 1;
    this.genresSub.unsubscribe();
    this.searchedSub.unsubscribe();
  }
}
