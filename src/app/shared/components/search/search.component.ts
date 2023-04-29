import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input()
  public placeholder  : string = '';

  @Output()
  public onValue = new EventEmitter <string>();
  
  sendValue( value : string):void{
    this.onValue.emit(value)
  }


}
