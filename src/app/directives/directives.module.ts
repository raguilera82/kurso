import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { ExampleDirectiveComponent } from './example-directive/example-directive.component';



@NgModule({
  declarations: [ExampleDirectiveComponent],
  imports: [
    CommonModule,
    CustomPipesModule
  ],
  exports: [ExampleDirectiveComponent]
})
export class DirectivesModule { }
