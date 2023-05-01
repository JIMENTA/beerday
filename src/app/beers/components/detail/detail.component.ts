import { Component } from '@angular/core';
import { Beer } from '../../interfaces/beer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  public beers : Beer[] =[]

}
