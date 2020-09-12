import { map, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    private apiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiEndpoint;
    }

    /**
     * GET request
     * @param path: Path of endpoint
     * @param options: Header options: optional
     */
    get(path: string, option?: any): Observable<any> {
        const url = `${this.apiUrl}${path}`;
        return this.httpClient.get(url, option).pipe(map(res => res), catchError(this.errorHandler));
    }

    /**
     * POST request
     * @param path: Path of endpoint
     * @param body: JSON object relative to endpoint
     * @param options: Header options: optional
     */
    post(path: string, body: any, options?: any): Observable<any> {
        const url = `${this.apiUrl}${path}`;
        return this.httpClient.post(url, body, options).pipe(map(res => res), catchError(this.errorHandler));
    }

    /**
     * PUT request
     * @param path: Path of endpoint
     * @param options: Header options: optional
     */
    put(path: string, body: object, options?: any): Observable<any> {
        const url = `${this.apiUrl}${path}`;
        return this.httpClient.put(url, body, options).pipe(map(res => res), catchError(this.errorHandler));
    }

    /**
     * DELETE request
     * @param path: Path of endpoint
     * @param options: Header options: optional
     */
    delete(path: string, options?: any): Observable<any> {
        const url = `${this.apiUrl}${path}`;
        return this.httpClient.delete(url, options).pipe(map(res => res), catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse): any {
        return throwError(error || 'server error.');
    }

}
