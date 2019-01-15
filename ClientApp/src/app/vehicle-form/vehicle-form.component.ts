import { VehicleService } from '../services/vehicle.service';
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
  vehicle: any = {
    features: [],
    contact: {}
  };

  constructor(
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe((makes: any[]) => this.makes = makes);
    this.vehicleService.getFeatures().subscribe((features: any[]) => this.features = features);
  }

  onMakeChange() {
    // tslint:disable-next-line:triple-equals
    // tslint:disable-next-line:triple-equals
    this.models = this.makes.find(m => m.id == this.vehicle.makeId).models;
    delete this.vehicle.modelId;
  }

  onFeatureToggle(featureId, $event) {
    if ($event.target.checked) {
      this.vehicle.features.push(featureId);
    } else {
      // tslint:disable-next-line:prefer-const
      let index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }
}
