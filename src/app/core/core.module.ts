import { CommonModule, DatePipe } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NotFoundPageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule
    ],
    providers: [
    ]
})
export class CoreModule { }
