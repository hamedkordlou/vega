import { FeatureService } from './../services/feature.service';
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
  features: any[];
  vehicle: any = {};

  constructor(
    private makeService: MakeService,
    private featureService: FeatureService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe((makes: any[]) => this.makes = makes);
    this.featureService.getFeatures().subscribe((features: any[]) => this.features = features);
  }

  onMakeChange() {
    // tslint:disable-next-line:triple-equals
    // tslint:disable-next-line:triple-equals
    this.models = this.makes.find(m => m.id == this.vehicle.make).models;
  }
}
