import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CategoriaListComponent],
  declarations: [CategoriaListComponent]
})
export class CategoriaModule { }
