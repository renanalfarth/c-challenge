import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrolleeService } from '../../services/enrollee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrollee-edit',
  templateUrl: './enrollee-edit.component.html',
  styleUrls: ['./enrollee-edit.component.scss']
})
export class EnrolleeEditComponent implements OnInit {

  id: string;
  enrolleeForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private enrolleeService: EnrolleeService,
    private formBuilder: FormBuilder
    ) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getEnrollee();

    this.enrolleeForm = this.formBuilder.group({
      name: [null, Validators.required],
      active: [null, Validators.required]
    });

  }

  private getEnrollee(): void {
    const params = { id: this.id };

    this.enrolleeService.getEnrollee(params).subscribe(result => {
      this.enrolleeForm.patchValue(result);
    });
  }

  public submitForm(): void {
    console.log(this.enrolleeForm);
    if (!this.enrolleeForm.valid) {
      return;
    }
    console.log(this.enrolleeForm.value);
  }

}
