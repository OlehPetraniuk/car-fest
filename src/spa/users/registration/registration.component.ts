import { Component, OnInit } from '@angular/core';
import { visibility } from '../../services/animations';

@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [visibility]
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
