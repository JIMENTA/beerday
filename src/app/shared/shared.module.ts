import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BeersModule } from '../beers/beers.module';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
  ],
  exports:[
    HomeComponent, 
    NavbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
