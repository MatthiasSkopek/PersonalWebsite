import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {Location} from '@angular/common'
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";


export class Item{
  public name:string;
  public desc: string;
  public img: string;
  public color: string;
  public link:string;
  public imgDesktop;
  public imgTablet;
  public imgMobile;
  public bodyText:string;
  public lightend:string;
  public things: string[];
}

@Component({
  selector: 'app-showcase-detail',
  templateUrl: './showcase-detail.component.html',
  styleUrls: ['./showcase-detail.component.sass']
})
export class ShowcaseDetailComponent implements OnInit {
  private subscription: Subscription;
   param:number;
  selectedItem: Item;
  NextItem: Item;
  iId:number;
  max:number;
  router: Router;

  constructor(private route: ActivatedRoute,private iS: ItemService,private _location: Location, _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    this.max = this.iS.getItemCount();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.iId = params['id'];
        this.param = +params['id'];
        this.selectedItem = this.iS.getItem(this.iId);

        if (this.param+1 > this.max-1) {
          this.NextItem = this.iS.getItem(0);
        } else {
          this.NextItem = this.iS.getItem((this.param + 1));
        }
      });
  }
  nextItem(){
    if(this.param+1 > this.max-1) {
      this.router.navigate(['/project/' + 0])
      console.log((this.param),this.max)
    }else {
      this.router.navigate(['/project/' + (this.param + 1)])
      console.log((this.param), this.max)
    }
  }
  goToSite(){
    var win = window.open(this.selectedItem.link, '_blank');
    win.focus();
  }
}
