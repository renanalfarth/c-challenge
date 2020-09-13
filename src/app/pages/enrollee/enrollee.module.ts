import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrolleeRoutingModule } from './enrollee-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule} from '@angular/cdk/table';
import { EnrolleeEditComponent } from './components/enrollee-edit/enrollee-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnrolleeComponent, EnrolleeEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrolleeRoutingModule,
    LayoutModule,
    CdkTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EnrolleeModule { }
