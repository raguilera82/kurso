import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const ROUTES: Routes =  [
  {path: '', redirectTo: 'directives', pathMatch: 'full'},
  {path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)},
  {path: 'databinding',
     loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule)},
  {path: '**', redirectTo: 'directives'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
