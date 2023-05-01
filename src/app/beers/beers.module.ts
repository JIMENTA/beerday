import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { BeersPageComponent } from './pages/beers-page/beers-page.component';
import { BeersRoutingModule } from './beers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewsComponent } from './components/viewAll/viewAll.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { RandomBeerComponent } from './pages/random-beer/random-beer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from './components/detail/detail.component';
;



@NgModule({
  declarations: [
    ByNameComponent,
    BeersPageComponent,
    ViewsComponent,
    ByIdComponent,
    RandomBeerComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    SharedModule,
    NgxPaginationModule
  ], 
  exports:[
    ViewsComponent
  ]

})
export class BeersModule { }
