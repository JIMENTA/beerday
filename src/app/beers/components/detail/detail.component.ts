import { Component, Input } from '@angular/core';
import { Beer } from '../../interfaces/beer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  p: number = 1;

  @Input()
  public beer! : Beer
  public beers : Beer[] = []


}
