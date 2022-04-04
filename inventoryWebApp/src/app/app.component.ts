import { Items } from './Models/Items.model';
import { ItemsService } from 'src/app/_Service/items.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventoryWebApp';

  loaded = false;

  constructor(
    private itemService: ItemsService
  ) {
    this.loaded = (localStorage.getItem('loaded') ? true : false);
    this.loadData();
  }

  loadData() {
    if (!this.loaded) {
      localStorage.setItem('loaded', JSON.stringify(true));
      this.itemService.loadItems().subscribe((itemData: Items[]) => {
        localStorage.setItem('itemsData', JSON.stringify(itemData));
      });
    }
  }
}
