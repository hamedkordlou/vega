import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-test',
  templateUrl: './drop-test.component.html',
  styleUrls: ['./drop-test.component.css']
})
export class DropTestComponent implements OnInit {

  countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name === count).cities;
  }

  constructor() { }

  ngOnInit() {
  }

}
