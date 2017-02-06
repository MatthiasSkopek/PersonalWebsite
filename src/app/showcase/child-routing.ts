import {Routes, RouterModule} from "@angular/router";
import {ShowcaseDetailComponent} from "./showcase-detail/showcase-detail.component";
import {ShowcaseListComponent} from "./showcase-list/showcase-list.component";
import {ModuleWithProviders} from "@angular/core";
export const childR: Routes = [
  { path:'', component: ShowcaseListComponent},
  { path: ':id', component: ShowcaseDetailComponent}
];

export const routing = RouterModule.forChild(childR)
