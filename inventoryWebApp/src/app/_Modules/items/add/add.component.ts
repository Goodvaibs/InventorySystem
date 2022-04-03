import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  title:string = 'Add Items'
  constructor() { }

  ngOnInit(): void {
  }

}
