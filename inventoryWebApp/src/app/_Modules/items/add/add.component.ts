import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Items } from 'src/app/Models/Items.model';
import { Category } from 'src/app/_Shared/Constants/Category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  title:string = 'Add Items';
  buttonText:string = 'Add';
  isSubmitted:boolean = false;
  isFormLoaded:boolean = false;
  itemCategory = Category;
  defaultOption:string = 'default';
  categoryDetails:Items = {
    name:'',
    category:'',
    description:'',
    price:0,
    image:'',
  }
  form!:FormGroup
  formItems:any;
  constructor(private fBuild:FormBuilder) {
    this.createForm()
  }


  ngOnInit(): void {
  }

  addAdmin(){}


  //Build form group controls
  createForm(){
    this.form = this.fBuild.group({
      child_items : this.createItemsForm()
    })

    this.isFormLoaded = true;
  }

  //Item form controls
  createItemsForm() {
    this.formItems = this.fBuild.group({
      name:[this.categoryDetails.name,[Validators.required,Validators.maxLength(10)]],
      category:[this.categoryDetails.category,Validators.required],
      description:[this.categoryDetails.description,[Validators.required,Validators.maxLength(200)]],
      price:[this.categoryDetails.price,Validators.required],
      image:[this.categoryDetails.image]
    })
    return this.fBuild.array([this.formItems])
  }

  // getter for easy access to form fields
  get f() { return this.form.controls; }

  //getter for child items
  get fItem() { 
    return this.form.get('child_items') as FormArray
  }

  //Function adds or updates item
  saveItem(){
    this.isSubmitted = true;
    return
  }

  //Add more items
  addMoreItems() {
    this.fItem.push(this.formItems);
  }
}
