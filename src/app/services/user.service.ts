import {Injectable} from '@angular/core';
import { UserApi } from '../../spa/users/user-api';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import {delay} from 'rxjs/operators';
import { Http} from '@angular/http';
import { User } from '../../spa/services/user.interface';

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;
    dataTransfer: Array<any>;
    private url='localhost:3000/users';
    constructor(private router:  Router) {

    }
    signIn(email: string, password: string): Observable<any> {
        if (email === 'test@gmail.com' && password === '123')
        {
        this.isAuthenticated = true;
        return of({}).pipe(delay(2000));
    } else {return throwError('Invalid email or password');}
    }
    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return of({});
    }
}