import { Component, OnInit } from '@angular/core';
import { Car } from '../../services/car-interface';
import { Router } from '@angular/router';
import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-car-maint',
  templateUrl: './car-maint.component.html',
  styleUrls: ['./car-maint.component.css']
})
export class CarMaintComponent implements OnInit {
  CarList: Array<Car>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private router: Router, private appDataService: AppDataService) {
    appDataService.getCars().subscribe((data) => {this.CarList = data; });
   }

  ngOnInit() {
  }

}
