import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlidesComponent } from './ngx-slides.component';

describe('NgxSlidesComponent', () => {
  let component: NgxSlidesComponent;
  let fixture: ComponentFixture<NgxSlidesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NgxSlidesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  const slides = [
    {
      image: '/assets/images/image1.jpeg',
      title: 'Image1'
    },
    {
      image: '/assets/images/image2.jpeg',
      title: 'Image1'
    },
    {
      image: '/assets/images/image3.jpeg',
      title: 'Image1'
    }
  ];
  const config = {
    width: '800px',
    height: '300px',
    autoPlay: false,
    delay: 1000
  };
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the first slide', () => {
    expect(component.currentSlide).toEqual(0);
  });

  it('should move to slide', () => {
    component.config = config;
    component.slideImages = slides;
    component.moveToSlide(2);
    expect(component.currentSlide).toEqual(2);
  });

  it('should move to slide with autoplay', (done) => {
    config.autoPlay = true;
    component.config = config;
    component.slideImages = slides;
    component.currentSlide = 0;
    component.ngOnInit();
    setTimeout(() => {
      expect(component.currentSlide).toEqual(1);
      done();
    }, config.delay + 1);
  });

  it('should move to slide with autoplay', (done) => {
    config.autoPlay = true;
    component.config = config;
    component.slideImages = slides;
    component.currentSlide = 2;
    component.ngOnInit();
    setTimeout(() => {
      expect(component.currentSlide).toEqual(0);
      done();
    }, config.delay + 1);
  });
});
