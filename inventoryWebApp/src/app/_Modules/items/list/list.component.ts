import { Component, OnInit } from '@angular/core';

import { TextConstants } from 'src/app/_Shared/Constants/locale'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  locale = TextConstants;

  abc = [1,2,3,4,5]
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
