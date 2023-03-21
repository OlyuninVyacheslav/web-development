import {Component, OnInit} from '@angular/core';
import {AdressService} from "../../service/Adress-service.service";
import {Adress} from "../../model/Adress";
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'InfiniteList';
  gridColumns = 5;
  page = 1;
  adresses: Adress[] =[ ];
  constructor(private adrService: AdressService) {}
  ngOnInit(): void {

    this.adrService.
    getAdress(this.page).
    subscribe((adr : Adress[] ) => {
     this.adresses = adr
    });

  }

    onScroll(): void {

    this.adrService.
    getAdress(this.page++).
    subscribe((adr : Adress[]) => {
      this.adresses = adr
    });
  }

}
