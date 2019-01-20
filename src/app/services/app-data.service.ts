import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Car } from './car-interface';
import { Observable, of, throwError } from 'rxjs';
import {delay, map, catchError} from 'rxjs/operators';
import { Http, Response } from '@angular/http';

@Injectable()
export class AppDataService {

    private CarsCollection: Array<Car>;
    private url = 'http://localhost:3000/cars';

    constructor(private userService: UserService, private http: Http) {

    }
    getCars(): Observable<Car[]> {
        return this.http.get(this.url).pipe(map((response: Response) => {
            this.CarsCollection = response.json();
            return this.CarsCollection;
        }), catchError((error: Response) => throwError('Server do not response')));
    }
    getCar(id: number): Observable<Car> {
        return this.http.get(this.url).pipe(map((response: Response) => {
            return response.json().filter((itemCar: Car) => itemCar.id === id);
        }), catchError((error: Response) => throwError('Server do not response')));
    }

    deleteCar( id: number): Observable<any> {
        return of({}).pipe(delay(2000), map(()=> this.CarsCollection.splice(this.CarsCollection.findIndex(item => item.id === id), 1)));
    }

    createCar(newCar: Car): Observable<any> {
        let id=0;
        this.CarsCollection.forEach(item => {
            if(item.id >= id) {
                id = item.id + 1;
            }
        });
        newCar.id = id;
        this.CarsCollection.push(newCar);
        return of(newCar);
    }

    updateCar(CarForUpdating: Car) :Observable<any>{
        const car = this.CarsCollection.find(item => item.id === CarForUpdating.id);
        Object.assign(car, CarForUpdating);
        return of(car).pipe(delay(1200));
    }
}
