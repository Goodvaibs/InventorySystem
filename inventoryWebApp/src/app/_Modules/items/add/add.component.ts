import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  title:string = 'Add Items'
  buttonText:string = 'Add'
  isSubmitted = false;
  f:any
  adminId:any
  gender:any
  adminDetails:any
  form:any
  isLoaded = false
  constructor() { }

  ngOnInit(): void {
  }

  addAdmin(){}

}
