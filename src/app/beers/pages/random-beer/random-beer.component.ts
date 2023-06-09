import { Component, Input } from '@angular/core';
import { BeersService } from '../../services/beers.service';
import { Beer } from '../../interfaces/beer.interface.';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent {
  @Input()
  public beer! : Beer
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
