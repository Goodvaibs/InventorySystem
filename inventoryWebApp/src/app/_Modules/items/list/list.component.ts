import { PopupServiceService } from './../../../_Service/popup-service.service';
import { Items } from 'src/app/Models/Items.model';
import { ItemsService } from 'src/app/_Service/items.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextConstants } from 'src/app/_Shared/Constants/locale'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  locale = TextConstants;
  items$!: Observable<Items[]>;

  constructor(
    private itemsService: ItemsService,
    private popupService: PopupServiceService
  ) { }

  ngOnInit(): void {
    this.getItemList();
  }

  //Api call for product list using async pipe
  getItemList() {
    this.items$ = this.itemsService.getItems();
  }

  //Delete Item
  deleteItem() {
    this.popupService.confirmAlertPopup().then((response) => {
      if (response.isConfirmed) {
        
      }
    });
  }

}
