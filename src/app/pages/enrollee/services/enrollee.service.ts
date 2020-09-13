import { Enrollee } from './../models/enrollee.model';
import { MainService } from '../../../shared/services/main.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


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
        const enrolleeData = _.omit(enrollee, ['id', 'dateOfBirth']);
        return this.mainService.put(`${this.featurePath}/${enrollee.id}`, enrolleeData);
    }

}
