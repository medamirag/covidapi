import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/Models/countries';
import { CountriesService } from 'src/app/Services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private countryService : CountriesService) { }
countries !: Countries[]
  ngOnInit(): void {
    this.getAllCountriesController()
  }

  getAllCountriesController(){
    this.countryService.getAllCountries().subscribe(data=>{this.countries = data;
      console.log(this.countries);}
    );
    
  }
  

}
