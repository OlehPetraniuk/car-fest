import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submitting = false;
  formError: string;
  constructor(private userApi: UserApi) { }

  ngOnInit() {
  }

}
