import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from '../../interfaces/beer.interface.';
import { BeersService } from '../../services/beers.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit{
 public beerId ?: Beer | null;


  constructor (private activatedRoute : ActivatedRoute, private router : Router, private beersService : BeersService ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(  ({ id }) => this.beersService.searchById(id))
    )
    .subscribe( beer => {
      if(!beer)this.router.navigateByUrl('');

      return this.beerId = beer
    
    })

  }

}
