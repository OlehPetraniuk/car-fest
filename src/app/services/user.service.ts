import {Injectable} from '@angular/core';
import { UserApi } from '../../spa/users/user-api';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = true;
    constructor(private router:  Router) {

    }

    signIn(email: string, password: string): Observable<any>{}
    signOut(): Observable<any> {}
    
}