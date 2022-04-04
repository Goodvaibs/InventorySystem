import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Items } from 'src/app/Models/Items.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

<<<<<<< Updated upstream
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
=======
  title:string = 'Add Items';
  buttonText:string = 'Add';
  isSubmitted:boolean = false;
  isFormLoaded:boolean = false;
  itemCategory = [
    {
      name:'Packing food',
      value:'1'
    },
    {
      name:'Raw materials',
      value:'2'
    },
    {
      name:'Cleaning tools',
      value:'3'
    },
    {
      name:'Computer parts',
      value:'4'
    },
    {
      name:'Clothes',
      value:'5'
    }
  ]
  categoryDetails:Items = {
    name:'',
    category:'',
    description:'',
    price:0,
    image:'',
  }
  form!:FormGroup
  constructor(private fBuild:FormBuilder) {
    this.createForm()
  }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
  addAdmin(){}

=======
  //Build form group controls
  createForm(){
    this.form = this.fBuild.group({
      name:[this.categoryDetails.name,[Validators.required,Validators.maxLength(10)]],
      category:[this.categoryDetails.category,Validators.required],
      description:[this.categoryDetails.description,Validators.maxLength(200)],
      price:[this.categoryDetails.price,Validators.required],
      image:[this.categoryDetails.image]
    })

    this.isFormLoaded = true;
  }

  // getter for easy access to form fields
  get f() { return this.form.controls; }

  //Function adds or updates item
  addItem(){

  }
>>>>>>> Stashed changes
}
