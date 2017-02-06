import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../showcase-detail/showcase-detail.component";

@Component({
  selector: 'app-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.sass']
})
export class ShowcaseItemComponent implements OnInit {
  @Input()item: Item;
  @Input()itemId: number;
  constructor() { }

  ngOnInit() {
  }

}
