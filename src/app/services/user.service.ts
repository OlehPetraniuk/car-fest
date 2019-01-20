import {Injectable} from '@angular/core';
import { UserApi } from '../../spa/users/user-api';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import {delay, map} from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { User } from '../../spa/services/user.interface';

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;
    dataTransfer: Array<any>;
    private url='http://localhost:3000/users';
    constructor(private router:  Router, private http: Http) {
        this.dataTransfer = null;
    }
    signIn(email: string, password: string): Observable<any> {
        return this.http.get(this.url).pipe(delay(2000), map((response: Response) => {
            const arrayFilter: User[] = response.json().filter((item: User) =>
            item.email === email && item.password === password);
            if ( arrayFilter.length !== 0) {
                this.isAuthenticated = true;
                localStorage.setItem('user', JSON.stringify(arrayFilter[0]));
            } else {return throwError('Invalid email or password');
        }}));
        }
    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return of({});
    }
}