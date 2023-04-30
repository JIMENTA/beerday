import { Beer } from './../interfaces/beer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class BeersService {

    private apiUrl: string = 'https://api.punkapi.com/v2/beers/'

    constructor(private http: HttpClient) { }
    
    showAllBeer(): Observable <Beer[]>{
      const url = `${this.apiUrl}?page=2&per_page=80`
      return this.http.get<Beer[]>(url)
    }

    searchById( id : number): Observable <Beer >{
      const url = `${this.apiUrl}?ids=${id}`;
      return  this.http.get<Beer>( url)
    }


    searchBeer( text : string): Observable <Beer[]>{
      const url = `${this.apiUrl}?beer_name=${text}`; 
      return  this.http.get<Beer[]>( url)
    }
        
    showARandomBeer(): Observable <Beer[]>{
      return this.http.get<Beer[]>(`${this.apiUrl}random`)
    }


}