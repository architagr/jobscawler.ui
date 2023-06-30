import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class BaseRepository {
  //private baseUrl = environment.BaseUrl;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }//ng update @angular/cli @angular/core

  public getAll(baseUrl: string, apiMethod: string): Observable<any> {
    this.spinner.show();

    return this.http.get<any[]>(baseUrl + apiMethod)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  public getOne(baseUrl: string, apiMethod: string): Observable<any> {
    this.spinner.show();
    let queryParams = new HttpParams();
    return this.http.get<any>(baseUrl + apiMethod, {params: queryParams})
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  public create(baseUrl: string, apiMethod: string, data: any): Observable<any> {
    this.spinner.show();

    return this.http.post<any>(baseUrl + apiMethod, data)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  public uploadImage(baseUrl: string, apiMethod:string, file: File): Observable<any> {
    this.spinner.show();
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post(baseUrl + apiMethod, formData)
    .pipe(
      catchError(this.handleError),
      finalize(() => {
        this.spinner.hide();
      })
    );
  }

  public update(baseUrl: string, id: number, data: any): Observable<any> {
    //this.spinner.show();

    return this.http.put<any>(baseUrl + 'items/' + id, data)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          //this.spinner.hide();
        })
      );
  }

  public delete(baseUrl: string, id: number): Observable<any> {
    //this.spinner.show();

    return this.http.delete<any>(baseUrl + 'items/' + id)
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
