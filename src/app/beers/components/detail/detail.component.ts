import { Component, Input } from '@angular/core';
import { Beer } from '../../interfaces/beer.interface.';
import { ActivatedRoute, Router } from '@angular/router';
import { BeersService } from '../../services/beers.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input()
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
