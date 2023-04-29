import { Component } from '@angular/core';
import { BeersService } from '../../services/beers.service';
import { Beer } from '../../interfaces/beer';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent {
  
  public beers : Beer[] = []

  constructor (private beersService : BeersService ){}
  ngOnInit(): void {
   this.showRandomBeer()
  }

  showRandomBeer() {
    return this.beersService.showARandomBeer()
    .subscribe( beer => {
      this.beers = beer
     })


  }

}
