import {NgModule} from "@angular/core";

import {ShowcaseComponent} from "./showcase.component";
import {ShowcaseListComponent} from "./showcase-list/showcase-list.component";
import {ShowcaseDetailComponent} from "./showcase-detail/showcase-detail.component";
import {ShowcaseItemComponent} from "./showcase-list/showcase-item.component";
import {ItemService} from "./item.service";
import {routing} from "./child-routing";
import {RouterModule} from "@angular/router";
/**
 * Created by matthias on 06.02.17.
 */
@NgModule({
  declarations: [
    ShowcaseComponent,
    ShowcaseItemComponent,
    ShowcaseListComponent,
    ShowcaseDetailComponent
  ],providers:[
    ItemService
  ],
  imports: [
    routing
  ]
})

export class ShowcaseModule { }
