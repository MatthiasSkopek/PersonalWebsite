
import {RouterModule, Routes} from "@angular/router";
import {childR} from "./showcase/child-routing";
import {HomeComponent} from "./home/home.component";
import {ShowcaseComponent} from "./showcase/showcase.component";
import {AboutComponent} from "./about/about.component";
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'project',loadChildren: 'app/showcase/showcase.module#ShowcaseModule'},
  {path:'about',component:AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
