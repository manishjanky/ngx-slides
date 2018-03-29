import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  tab = 1;
  slideImages = [{
    image: '/assets/image1.jpg',
    title: "Image 1"
  },
  {
    image: '/assets/image2.jpg',
    title: "Image 2"
  },
  {
    image: '/assets/image3.jpg',
    title: "Image 3"
  }]
  config: any = {
    width: '800px',
    height: '300px',
    autoPlay: true,
    delay: 3000
  };
  confign: any = {
    width: '800px',
    height: '300px',
    autoPlay: false,
    delay: 3000
  };
}
