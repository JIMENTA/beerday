import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../interfaces/beer';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-views',
  templateUrl: './viewAll.component.html',
  styleUrls: ['./viewAll.component.css']
})
export class ViewsComponent implements OnInit{
  p: number = 1;
  @Input()
  public beers : Beer[] = []
  
  constructor (private beersService : BeersService ){}
  ngOnInit(): void {
   this.showBeers()
  }

  showBeers() {
    return this.beersService.showAllBeer()
    .subscribe( beers => {
      this.beers = beers
     })

  }
}
