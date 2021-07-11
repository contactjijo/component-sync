import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortNumberPipe } from './sort-number.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
