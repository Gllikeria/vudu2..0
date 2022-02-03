import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private movie: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  movieId!: string | null;
  movieObj: any;
  twoGenre: any;
  castAndCrewObj: any;

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieObj = this.movie
      .getMovieDetils(this.movieId)
      .pipe(
        map((data: any) => {
          this.movieObj = data;
          return data.genres;
        }),
        map((x) => x.slice(0, 2))
      )
      .subscribe((data: any) => {
        this.twoGenre = data;
      });
    this.castAndCrewObj = this.movie
      .getCastAndCrew(this.movieId)
      .subscribe((data) => {
        this.castAndCrewObj = data;
      });
  }
  btnText: 'More' | 'Less' = 'More';
  more() {
    if (this.btnText === 'More') {
      this.btnText = 'Less';
    } else {
      this.btnText = 'More';
    }
  }
  toHomePage(event:any){
    if(event === 'popular') {
      this.router.navigate(['home'])
    }
  }
}
