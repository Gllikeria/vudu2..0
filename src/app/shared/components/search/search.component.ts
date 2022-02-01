import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, of, switchMap, tap } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { SearchService } from 'src/app/core/services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  searchedMovieName!: string;
  genresArr: any = [];
  searchedMoviesArr: any = [];
  constructor(private search: SearchService, private movie: MoviesService) {}

  // searchBox = document.getElementById('search-box') as HTMLInputElement;
  @ViewChild('nameInput', { static: true }) name!: ElementRef;
  typeahead:any;
  ngOnInit(): void {
    this.movie
      .getGenres()
      .subscribe((data: any) => (this.genresArr = data.genres));
    // console.log(this.searchedMoviesArr);


  }
  ngAfterViewInit() {
    console.log(1);
    
   this.typeahead = fromEvent(this.name.nativeElement, 'keyup').pipe(
      map((e:any) => (e.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm =>  { 
        // console.log(searchTerm);
        
       return this.search.getSearchedMovie(searchTerm)
      }),
      tap((data)=> {console.log(data); return data}
      ))

    
  }
  searchMovie() {
   this.typeahead.subscribe((data:any) => {
    console.log(data);
  });
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
