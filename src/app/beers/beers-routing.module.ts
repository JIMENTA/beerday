import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersPageComponent } from './pages/beers-page/beers-page.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ViewsComponent } from './components/viewAll/viewAll.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { RandomBeerComponent } from './pages/random-beer/random-beer.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {
    path:'', component: BeersPageComponent
  },
  {
    path:'details', component: DetailComponent
  },
  {
    path:'viewAll', component: ViewsComponent,
  },
  {
    path:'random', component: RandomBeerComponent
  },
  {
    path:'by-name', component: ByNameComponent
  },
  {
    path:':id', component: ByIdComponent
  },
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class BeersRoutingModule { }
