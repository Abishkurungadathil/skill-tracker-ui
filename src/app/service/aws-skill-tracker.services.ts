import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  searchEmploye(searchBy: any,searchValue: any,): Observable<any> {
    return this.http.get<Employee[]>(environment.api_url.concat("/" ,searchBy , "/" , searchValue),{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'x-api-key':environment.api_key

      })}).pipe(
      retry(3), catchError(this.handleError<Employee[]>('searchEmploye')));
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}