import { Component } from '@angular/core';
import { BeersService } from '../../services/beers.service';
import { Beer } from '../../interfaces/beer';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent {
  public beers : Beer[] = []

  constructor (private beersService : BeersService ){}

  searchByName( name : string) {
   this.beersService.searchBeer(name)
   .subscribe( beers => {
    this.beers = beers
   })
  }

}
