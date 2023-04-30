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
;



@NgModule({
  declarations: [
    ByNameComponent,
    BeersPageComponent,
    ViewsComponent,
    ByIdComponent,
    RandomBeerComponent,
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class BeersModule { }
