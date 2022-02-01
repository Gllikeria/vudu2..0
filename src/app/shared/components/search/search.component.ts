import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, map, of } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { SearchService } from 'src/app/core/services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchedMovieName!: string;
  genresArr: any = [];
  searchedMoviesArr: any = [];
  constructor(private search: SearchService, private movie: MoviesService) {}

  ngOnInit(): void {
    this.movie
      .getGenres()
      .subscribe((data: any) => (this.genresArr = data.genres));
    console.log(this.searchedMoviesArr);
  }
  searchMovie() {

    // this.search.getSearchedMovie(this.searchedMovieName)
    // .pipe(
    //   distinctUntilChanged(),
    //   map((data: any) => {
    //     console.log(this.searchedMovieName);

    //     data.results.forEach((element: any) => {
    //       this.searchedMoviesArr.push(element);
    //     });
    //   })
    // )
    // .subscribe(data => this.search.searchedMoviePage++);
  }
}
