import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetails } from 'src/app/Models/country-details';
import { CountryDetailsService } from 'src/app/Services/country-details.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
country!:string;
  constructor(private countryDetailsService : CountryDetailsService,private activatedRoute : ActivatedRoute) { }
countryDetails !:CountryDetails[];
  ngOnInit(): void {
   this.country= this.activatedRoute.snapshot.params["country"]
    this.countryDetailController()
  }

  countryDetailController(){
    

    this.countryDetailsService.getCountryDetails(this.country).subscribe(result=>{console.log(result);
      this.countryDetails= result});    

  }
}
