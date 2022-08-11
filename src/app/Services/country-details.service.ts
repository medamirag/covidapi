import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryDetails } from '../Models/country-details';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
Url:string="https://api.covid19api.com/total/dayone/country"
  constructor(private httpClient : HttpClient) { }

  getCountryDetails(country : string) : Observable<CountryDetails[]>{
    console.log(`${this.Url}/${country}`);
    
return this.httpClient.get<CountryDetails[]>(`${this.Url}/${country}`);

  }
}
