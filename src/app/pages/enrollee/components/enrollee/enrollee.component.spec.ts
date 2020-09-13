import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeComponent } from './enrollee.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnrolleeComponent', () => {
  let component: EnrolleeComponent;
  let fixture: ComponentFixture<EnrolleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ EnrolleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
