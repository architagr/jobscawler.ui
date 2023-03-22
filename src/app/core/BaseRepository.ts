import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BaseRepository {
  private baseUrl = 'https://api.example.com/';

  constructor(private http: HttpClient) { }//ng update @angular/cli @angular/core

  public getAll(): Observable<any[]> {
    //this.spinner.show();

    return this.http.get<any[]>(this.baseUrl + 'items')
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          //this.spinner.hide();
        })
      );
  }

  public getOne(id: number): Observable<any> {
    //this.spinner.show();

    return this.http.get<any>(this.baseUrl + 'items/' + id)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          //this.spinner.hide();
        })
      );
  }

  public create(data: any): Observable<any> {
    //this.spinner.show();

    return this.http.post<any>(this.baseUrl + 'items', data)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          //this.spinner.hide();
        })
      );
  }

  public update(id: number, data: any): Observable<any> {
    //this.spinner.show();

    return this.http.put<any>(this.baseUrl + 'items/' + id, data)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          //this.spinner.hide();
        })
      );
  }

  public delete(id: number): Observable<any> {
    //this.spinner.show();

    return this.http.delete<any>(this.baseUrl + 'items/' + id)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          //this.spinner.hide();
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Log the error to the console or send it to a logging service
    console.error(error);

    // Return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
