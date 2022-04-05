import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Items } from 'src/app/Models/Items.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url = 'assets/Items_data/items.json';

  constructor(
    private http: HttpClient
  ) { }


  //api call to get items listing
  getItems() {
    //this would be the idle api call

    // return this.http.get<Items[]>(this.url).pipe(
    //   map((item) => {
    //     return item
    //   })
    // );

    // Using this piece of code ,since im using the data from local storage
    let itemsData = JSON.parse(localStorage.getItem('itemsData') || '[]');
    return of(itemsData);
  }

  //load data
  loadItems() {
    return this.http.get<Items[]>(this.url);
  }

  //api to delete the item
  deleteItem(id: string) {
    console.log(id);
    this.getItems().subscribe((itemsData:Items[]) => {
      let newItems = itemsData.filter((items:Items) => items.id != id);
      this.setToLocalStorage(newItems)
    });
    return true;
  }

  //set Item
  setItem(data:Items[], action:string){
    var newDataArr;
    if(action == 'edit')  {
      this.getItems().subscribe((itemsData:Items[]) => {
        newDataArr = itemsData.map((items:Items) => {
          if(items.id == data[0].id) {
            items = data[0]
          }
          return items
        })
      });
      localStorage.setItem('itemsData', JSON.stringify(newDataArr));

    } else {
      this.getItems().subscribe((itemData:Items[])=>{
        let newDataArray = [...itemData,...data]
        this.setToLocalStorage(newDataArray)
  
      });
    }
    return of(true)
  }

  //set itemsData in localstorage
  setToLocalStorage(data:Items[]){
    localStorage.setItem('itemsData', JSON.stringify(data));
  }

  //get item by id
  getItemById(id:string) {
    let data:Items[] = [];
    this.getItems().subscribe((itemsData:Items[]) => {
      data = itemsData.filter((items:Items) => items.id == id)
    });
    return of(data[0]);
  }
}
