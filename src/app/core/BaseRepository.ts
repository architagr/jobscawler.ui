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
  private baseUrl = environment.BaseUrl;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }//ng update @angular/cli @angular/core

  public getAll(apiMethod: string): Observable<any> {
    this.spinner.show();

    return this.http.get<any[]>(this.baseUrl + apiMethod)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  public getOne(apiMethod: string, id: any): Observable<any> {
    //this.spinner.show();
    let queryParams = new HttpParams();
    queryParams = queryParams.append("jobId", id);
    return this.http.get<any>(this.baseUrl + apiMethod, {params: queryParams})
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          //this.spinner.hide();
        })
      );
  }

  public create(apiMethod: string, data: any): Observable<any> {
    this.spinner.show();

    return this.http.post<any>(this.baseUrl + apiMethod, data)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          this.spinner.hide();
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
