import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Items } from 'src/app/Models/Items.model';
import { ItemsService } from 'src/app/_Service/items.service';
import { PopupServiceService } from 'src/app/_Service/popup-service.service';
import { Category } from 'src/app/_Shared/Constants/Category';
import { Xsscheck } from 'src/app/_Shared/Validator/xsscheck';
import { TextConstants } from 'src/app/_Shared/Constants/locale'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  locale = TextConstants;
  isSubmitted:boolean = false;
  isFormLoaded:boolean = false;
  itemCategory = Category;

  form!:FormGroup
  formItems:any;
  constructor(private fBuild:FormBuilder,
    private itemService:ItemsService,
    private popupService:PopupServiceService,
    private router: Router) {
    this.createForm()
  }


  ngOnInit(): void {
  }

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
      name:['',[Validators.required,Validators.maxLength(10)]],
      category:['',Validators.required],
      description:['',[Validators.required,Validators.maxLength(200)]],
      price:['',Validators.required],
      image:['']
    }, {
      validator : Xsscheck('name')
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
    //If errors then return
    if(this.form.invalid){
      return
    } else {
      console.log('Form data ',this.fItem.controls)
      let data:Items[] = []
      this.fItem.controls.forEach((val,ind)=>{
        if(val){
          let cat = Category.find((v)=>v.value === this.fItem.controls[ind].get('category')?.value)
          let obj = {
            id: Math.random().toString(16).slice(2),
            name:this.fItem.controls[ind].get('name')?.value,
            category:this.fItem.controls[ind].get('category')?.value,
            description:this.fItem.controls[ind].get('description')?.value,
            price:this.fItem.controls[ind].get('price')?.value,
            image: cat?.img
          }
          data.push(obj)
        }
      })
      console.log('DAta ',data)
      if(data.length > 0){
        this.itemService.setItem(data).subscribe((resp)=>{
          if(resp){
            this.popupService.successAlertPopup();
            this.router.navigate(['/']);
          }
        })

      }
      return
    }
  }

  //Add more items
  addMoreItems() {
    this.fItem.push(this.fBuild.group({
      name:['',[Validators.required,Validators.maxLength(10)]],
      category:['',Validators.required],
      description:['',[Validators.required,Validators.maxLength(200)]],
      price:['',Validators.required],
      image:['']
    }, {
      validator : Xsscheck('name')
    }));
  }

  //Remove items from form control
  removeItem(index:number ) {
    this.fItem.removeAt(index)
  }
}
