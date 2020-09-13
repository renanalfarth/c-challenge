import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrolleeService } from '../../services/enrollee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Enrollee } from '../../models/enrollee.model';
import { SweetAlertService } from '../../../../core/utils/sweet-alert.service';

@Component({
  selector: 'app-enrollee-edit',
  templateUrl: './enrollee-edit.component.html',
  styleUrls: ['./enrollee-edit.component.scss']
})
export class EnrolleeEditComponent implements OnInit {

  id: string;
  enrolleeForm: FormGroup;
  enrollee: Enrollee;
  options: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private enrolleeService: EnrolleeService,
    private formBuilder: FormBuilder,
    private sweetAlert: SweetAlertService
    ) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getEnrollee();

    this.enrolleeForm = this.formBuilder.group({
      id: ['', Validators.required],
      dateOfBirth: [''],
      name: ['', Validators.required],
      active: [false, Validators.required]
    });

    this.options = [
      { id: true, label: 'Yes' },
      { id: false, label: 'No' }
    ];

  }

  private getEnrollee(): void {
    const params = { id: this.id };

    this.enrolleeService.getEnrollee(params).subscribe(result => {
      this.enrolleeForm.patchValue(result);
    }, error => {

      this.sweetAlert.showError(error.message);

      setTimeout(() => {
        this.router.navigateByUrl('dashboard');
      }, 1500);
    });
  }

  public submitForm(): void {
    if (!this.enrolleeForm.valid) {
      return;
    }

    const values = this.enrolleeForm.value;

    this.enrolleeForm.value.active = (values.active === true || values.active === 'true') ? true : false ;
    this.enrollee = new Enrollee(this.enrolleeForm.value);

    this.enrolleeService.updateEnrollee(this.enrollee).subscribe(result => {
      this.sweetAlert.showSuccess('Enrollee successfully updated.');

      setTimeout(() => {
        this.router.navigateByUrl('enrollee');
      }, 1500);

    }, error => {
      this.sweetAlert.showError(error.message);

      setTimeout(() => {
        this.router.navigateByUrl('enrollee');
      }, 1500);

    });

  }

}
