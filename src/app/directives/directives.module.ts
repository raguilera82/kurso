import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleDirectiveComponent } from './example-directive/example-directive.component';



@NgModule({
  declarations: [ExampleDirectiveComponent],
  imports: [
    CommonModule
  ],
  exports: [ExampleDirectiveComponent]
})
export class DirectivesModule { }
