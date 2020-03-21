import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabindingModule } from './databinding/databinding.module';
import { DirectivesModule } from './directives/directives.module';

const ROUTES: Routes =  [
  {path: '', redirectTo: 'directives', pathMatch: 'full'},
  {path: '**', redirectTo: 'directives'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    DatabindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
