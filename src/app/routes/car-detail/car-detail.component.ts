import { Component, OnInit } from '@angular/core';
import { FieldInput } from '../../../spa/dynamicForms/field-interface';
import { Car } from '../../services/car-interface';
import { AppDataService } from '../../services/app-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
