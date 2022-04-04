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

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService
  ) { }

  ngOnInit(): void {
    this.getItemsById();
  }

  getItemsById() {
    this.itemService.getItemById(this.itemId).subscribe(res => {
      console.log(res);
    });
  }

}
