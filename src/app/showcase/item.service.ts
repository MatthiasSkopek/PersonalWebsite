import { Injectable } from '@angular/core';
import {IITEMS} from "./mock-items";
import {Item} from "./showcase-detail/showcase-detail.component";

@Injectable()
export class ItemService {
  getItems(): Item[]{
    return IITEMS;
  }
  getItem(id: number){
    return IITEMS[id];
  }
  getItemCount(){
    return IITEMS.length;
  }

  constructor() { }

}
