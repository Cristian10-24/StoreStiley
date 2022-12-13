import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PromDescComponent } from './components/prom-desc/prom-desc.component'
import { ForgetPasswordComponent } from './components/sign-up/forget-password/forget-password.component';
import { FormRegisterComponent } from './components/sign-up/form-register/form-register.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', component:HomeComponent },
  { path: 'promocionesDescuentos', component:PromDescComponent },
  { path: 'signUp', component: SignUpComponent, },
  { path: 'forgetPassword', component: ForgetPasswordComponent,  },
  { path: 'register', component: FormRegisterComponent, },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
