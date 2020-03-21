import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabindingModule } from './databinding/databinding.module';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    DatabindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
