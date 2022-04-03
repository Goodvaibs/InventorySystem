import { Component, OnInit, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Variables
  notifCount:any;
  notifList:any;
  contactCount: any
  contactList:any
  userDetail:any
  test:any

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

}
