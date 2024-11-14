import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl2 = 'http://localhost:8080/api/';
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiUrl);
  }

  getSeriesList(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiUrl2);
  }

}
