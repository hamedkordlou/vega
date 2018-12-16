import { MakeService } from './../services/make.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  models: any[];
  vehicle: any = {};

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe((makes: any[]) => this.makes = makes);
  }

  onMakeChange() {
    // tslint:disable-next-line:triple-equals
    //console.log('TEMP', this.makes.find(m => m.id == this.vehicle.make));
    // tslint:disable-next-line:triple-equals
    this.models = this.makes.find(m => m.id == this.vehicle.make).models;
  }
}
