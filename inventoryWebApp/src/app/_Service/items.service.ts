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
  deleteItem() {

  }
}
