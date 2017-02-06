import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../showcase-detail/showcase-detail.component";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.sass']
})
export class ShowcaseListComponent implements OnInit {
  items: Item[]=[];


  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
