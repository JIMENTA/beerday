import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private debouncer : Subject<string> = new Subject<string>()
  private debouncerSubscription?: Subscription


  @Input()
  public placeholder  : string = '';

  @Output()
  public onDebounce = new EventEmitter <string>();

  ngOnInit(): void {
   this.debouncerSubscription= this.debouncer
   .pipe(
    debounceTime(300)
   )
   .subscribe( value => {
    this.onDebounce.emit(value)
   })
  }

  ngOnDestroy():void{
    this.debouncerSubscription?.unsubscribe()

  }

  onKeyPress(searchTerm : string){
    this.debouncer.next(searchTerm) 
 }




}
