import { Enrollee } from './../models/enrollee.model';
import { MainService } from '../../../shared/services/main.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnrolleeService {

    private featurePath = '/enrollees';

    constructor(private mainService: MainService) { }

    public getEnrollees(): Observable<any> {
        return this.mainService.get(`${this.featurePath}`);
    }

    public getEnrollee(params): Observable<any> {
        return this.mainService.get(`${this.featurePath}/${params.id}`);
    }

    public updateEnrollee(enrollee: Enrollee): Observable<any> {
        return this.mainService.get(`${this.featurePath}/${enrollee.id}`, enrollee);
    }

}
