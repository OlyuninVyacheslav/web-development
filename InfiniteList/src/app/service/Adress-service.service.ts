import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Adress } from '../model/Adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService  {
  res : any;
  adress : Adress[] =[
  ];

  constructor(private http: HttpClient) {
  }

  getAdress(page: number) : Observable< Adress[]>{

    for(let i = 0; i < 10;i++){
    this.http.get(
      `https://fakerapi.it/api/v1/addresses?_quantity=1`)
      .subscribe( (response) => {
      this.res = response;
      let adr : Adress =
      {
        country : this.res.data[0].country,
        country_code : this.res.data[0].county_code,
        zipcode : this.res.data[0].zipcode,
        city : this.res.data[0].city,
        buildingNumber : this.res.data[0].buildingNumber,
        streetName : this.res.data[0].streetName,
        street : this.res.data[0].street
      };
      this.adress.push(adr);
    });
  }

    return of(this.adress);

}

}
