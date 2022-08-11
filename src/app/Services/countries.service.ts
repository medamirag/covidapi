import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryDetails } from '../Models/country-details';
import { Countries } from '../Models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient : HttpClient) { }
  UrlCountriesList:string="https://api.covid19api.com/countries"

  getAllCountries(): Observable<Countries[]>{
   return this.httpClient.get<Countries[]>(this.UrlCountriesList)
  }


}
