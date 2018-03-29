import { NgModule } from '@angular/core';
import { NgxSlidesComponent } from './components/ngx-slides/ngx-slides.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [
  ],
  declarations: [
    NgxSlidesComponent
  ],
  exports: [
    NgxSlidesComponent
  ]
})
export class NgxSlidesModule {
}
