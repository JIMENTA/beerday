import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'beers', 
    loadChildren: () => import('./beers/beers.module').then( m => m.BeersModule)
  },
  {
    path:'**', redirectTo:'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
