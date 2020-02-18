import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './components/child/child.component';
 const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],  children: [
    {  path: 'child', component: ChildComponent  },
    
    ]   },

  { path: '**', component: PageNotFoundComponentComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
