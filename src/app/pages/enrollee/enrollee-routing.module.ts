import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { EnrolleeEditComponent } from './components/enrollee-edit/enrollee-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: EnrolleeComponent },
    { path: 'edit/:id', component: EnrolleeEditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnrolleeRoutingModule { }
