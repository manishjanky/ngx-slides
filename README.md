# ngx-slides

[![GitHub license](https://img.shields.io/github/license/manishjanky/ngx-slides.svg)](https://github.com/me-and/mdf/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ngx-slides.svg)]()
[![Build Status](https://travis-ci.org/manishjanky/ngx-slides.svg?branch=master)](https://travis-ci.org/manishjanky/ngx-slides)
[![Codecov branch](https://codecov.io/gh/manishjanky/ngx-slides/branch/master/graphs/badge.svg)]()
[![npm](https://img.shields.io/npm/dt/ngx-slides.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/manishjanky/ngx-slides.svg)]()
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/manishjanky/ngx-slides.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/manishjanky/ngx-slides.svg)]()
[![GitHub closed issues](https://img.shields.io/github/issues-closed/manishjanky/ngx-slides.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/manishjanky/ngx-slides.svg)]()

`ngx-slides` is a lightweight slideshow component for Anguar 4 applications and fully configurable.

##Features
* Autoplay
* Navigation buttons
* Customizable delay time, height, widths 

## Examples

* [demo-page](https://manishjanky.github.io/ngx-slides/)

## Installation

* `npm install ngx-slides`

### Using with webpack and tsc builds/ angular-cli builds

* import `NgxSlidesModule` into your app.module;
````
import { NgxSlidesModule } from 'ngx-slides'
````
* add `NgxSlidesModule` to the imports of your NgModule:
`````
@NgModule({
  imports: [
    ...,
    NgxSlidesModule
  ],
  ...
})
class YourModule { ... }
`````

* use `<ngx-slides></ngx-slides>` in your templates to add pagination in your view like below

````
<ngx-slides [slideImages]="slides" [config]="config"></ngx-slides>
````

## Config

### Input

* `slideImages: any[]` - An array of objects that contains the image url and captions.
* `config: {}` - Object with configurationn values for the slides with below format.

````
slideImages = [
    {
      image: '/assets/images/image3.jpeg', //path to image
      title: 'Image1' //caption for image
    }
]
````
````
config = {
        width:"800px", //width of slides defaults to 800px
        height:"300px" //height of slides defaults to 300px
        autoPlay:false //autoplay required or not defaults to false
        delay: 3000 // delay for autoplay
      }
````

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-slides/issues) here on GitHub.