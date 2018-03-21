import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-slides',
  templateUrl: './ngx-slides.component.html',
  styleUrls: ['./ngx-slides.component.scss']
})
export class NgxSlidesComponent implements OnInit {
  @Input() public slideImages: any[];
  @Input()
  public config: any = {
    width: '800px',
    height: '300px',
    autoPlay: false,
    delay: 3000
  };
  public currentSlide: number;
  constructor() {
    this.currentSlide = 0;
  }
  public ngOnInit() {
    this.setSlideShowAutoPlay();
  }

  public setSlideShowAutoPlay() {
    if (this.config.autoPlay) {
      setInterval(() => {
        this.currentSlide === this.slideImages.length - 1
          ? (this.currentSlide = 0)
          : ++this.currentSlide;
      }, this.config.delay);
    }
  }
  public moveToSlide(slide: number) {
    this.currentSlide = slide;
  }
}
