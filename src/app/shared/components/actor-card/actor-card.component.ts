import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
})
export class ActorCardComponent implements AfterViewChecked {
  movieId: any;
  castArr: any;

  constructor() {}
  @Input() castAndCrew: any;

  ngAfterViewChecked(): void {
    this.castArr = this.castAndCrew;
  }
  next() {
    let temp = this.castArr[0];
    this.castArr.push(temp);
    this.castArr.shift();
  }
  prev() {
    let temp = this.castArr[this.castArr.length - 1];
    this.castArr.unshift(temp);
    this.castArr.pop();
  }
}
