import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGaleryComponent } from './image-galery/image-galery.component';

@NgModule({
  declarations: [ImageGaleryComponent],
  imports: [CommonModule],
  exports: [ImageGaleryComponent]
})
export class UiImageGaleryModule { }
