import { Beer } from './../interfaces/beer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of} from 'rxjs';




@Injectable({providedIn: 'root'})
export class BeersService {

    private apiUrl: string = 'https://api.punkapi.com/v2/beers/'

    constructor(private http: HttpClient) { }
    
    searchById( id : number): Observable <Beer | null>{
      const url = `${this.apiUrl}?ids=${id}`;

     return  this.http.get<Beer[]>( url)
     .pipe(
      map( beers => beers.length > 0 ? beers[0] : null),
       catchError(() => of (null))
     );
  }

    showAllBeer(): Observable <Beer[]>{
        return this.http.get<Beer[]>(this.apiUrl)
     }

     searchBeer( text : string): Observable <Beer[]>{
       const url = `${this.apiUrl}?beer_name=${text}`;
       return  this.http.get<Beer[]>( url)
       .pipe(
         catchError(() => of ([]))
         );
        }
        
        showARandomBeer(): Observable <Beer[]>{
          return this.http.get<Beer[]>(`${this.apiUrl}random`)
       }


}