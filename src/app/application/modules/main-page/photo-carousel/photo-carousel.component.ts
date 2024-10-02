// import { Component, OnInit, Renderer2 } from '@angular/core';
// // import { CarouselModule } from 'ngx-bootstrap/carousel';

// @Component({
//   selector: 'app-photo-carousel',
//   standalone: true,
//   imports: [
//   ],
//   templateUrl: './photo-carousel.component.html',
//   styleUrls: ['./photo-carousel.component.scss']
// })

// export class PhotoCarouselComponent implements OnInit {

//   // constructor(private renderer: Renderer2) {}

//   ngOnInit(): void {
    
//   }


// }
// import { Component, OnInit } from '@angular/core';
// import { NgFor } from '@angular/common';
// import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
// // import { ThemeDirective } from '@coreui/angular'

// @Component({
//   selector: 'app-photo-carousel',
//   templateUrl: './photo-carousel.component.html',
//   styleUrls: ['./photo-carousel.component.scss'],
//   standalone: true,
//   imports: [CarouselComponent, CarouselInnerComponent, NgFor, CarouselItemComponent],
//   // ThemeDirective, 
// })
// export class PhotoCarouselComponent implements OnInit {

//   slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

//   ngOnInit(): void {
//     this.slides[0] = {
//       src: './assets/img/angular.jpg'
//     };
//     this.slides[1] = {
//       src: './assets/img/react.jpg'
//     };
//     this.slides[2] = {
//       src: './assets/img/vue.jpg'
//     };
//   }

//   onItemChange($event: any): void {
//     console.log('Carousel onItemChange', $event);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent} from '@coreui/angular';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss'],
  standalone: true,
  imports: [CarouselComponent, CarouselInnerComponent, NgFor, CarouselItemComponent]
})
export class PhotoCarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg'
    };
    this.slides[1] = {
      src: './assets/img/react.jpg'
    };
    this.slides[2] = {
      src: './assets/img/vue.jpg'
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}