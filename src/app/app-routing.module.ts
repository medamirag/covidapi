import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './Core/countries/countries.component';
import { CountryDetailsComponent } from './Core/country-details/country-details.component';

const routes: Routes = [
   {path:"countries/countryDetails/:country",component:CountryDetailsComponent},
   {path:"countries",component:CountriesComponent},
  // {path:"ingredients",component:RecipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
