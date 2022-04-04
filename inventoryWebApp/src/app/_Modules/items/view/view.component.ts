import { Items } from 'src/app/Models/Items.model';
import { ItemsService } from 'src/app/_Service/items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  itemId:string = this.route.snapshot.params.id
  item!: Items;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService
  ) { }

  ngOnInit(): void {
    this.getItemsById();
  }

  getItemsById() {
    this.itemService.getItemById(this.itemId).subscribe((res:Items) => {
      console.log(res);
      this.item = res
    });
  }

}
