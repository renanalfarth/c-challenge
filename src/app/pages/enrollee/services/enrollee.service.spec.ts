import { TestBed } from '@angular/core/testing';

import { EnrolleeService } from './enrollee.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnrolleeService', () => {
    let service: EnrolleeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
              HttpClientTestingModule,
            ]
        });
        service = TestBed.inject(EnrolleeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
