import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() title : EventEmitter<any> = new EventEmitter<any>();
  @Output() signUp : EventEmitter<any> = new EventEmitter<any>();
  @Input() displayNoneFromRegistration: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate(){
    this.router.navigate(['sign-up'])
  }

}
