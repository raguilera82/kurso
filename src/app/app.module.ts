import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { ChuckModule } from './chuck/chuck.module';
import { ChuckComponent } from './chuck/chuck/chuck.component';

const ROUTES: Routes =  [
  {path: '', redirectTo: 'directives', pathMatch: 'full'},
  {path: 'chuck', component: ChuckComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'directives', canActivate: [AuthService],
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)},
  {path: 'databinding', canActivate: [AuthService],
     loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule)},
  {path: '**', redirectTo: 'directives'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ChuckModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
