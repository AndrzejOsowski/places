import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Place} from '../models/place';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesServiceService {
  private url = 'https://metajzyki-pko.herokuapp.com/places';
  constructor(private http: HttpClient) {}
  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.url);
  }
  postPlace(place: Place): Observable<Place> {
    return this.http.post(this.url, place).pipe(tap(console.log));
  }
  getPlace(id: string): Observable<Place> {
    return this.http.get<Place>(this.url + '/' + id);
  }

}
