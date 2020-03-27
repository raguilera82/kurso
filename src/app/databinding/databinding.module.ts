import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmService } from '../confirm.service';
import { ChildComponent } from './child/child.component';
import { FatherComponent } from './father/father.component';

const ROUTES: Routes = [
  {path: '', component: FatherComponent},
  {path: 'child/:pepito',
  canDeactivate: [ConfirmService],
  component: ChildComponent}
];

@NgModule({
  declarations: [FatherComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class DatabindingModule { }
