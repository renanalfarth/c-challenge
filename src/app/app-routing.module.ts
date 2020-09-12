import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { EnrolleeModule } from './pages/enrollee/enrollee.module';

const routes: Routes = [
  {
      path: '',
      component: AppComponent,
      children: [
          {
              path: '',
              redirectTo: '/home/dashboard',
              pathMatch: 'full'
          },
          { path: 'dashboard', loadChildren: () => HomeModule },
          { path: 'enrollee', loadChildren: () => EnrolleeModule, data: { preload: false } },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
