import { Component, OnInit, Renderer2 } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss']
})

export class PhotoCarouselComponent implements OnInit {
  // currentSlide = 0;
  // items = ['Find university', 'Find job', 'Proforientation', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];
  // visibleItems = 3;

  // constructor() { }

  // ngOnInit(): void {
  // }

  // prev(): void {
  //   this.currentSlide = (this.currentSlide === 0) ? this.items.length - this.visibleItems : this.currentSlide - this.visibleItems;
  //   this.updateSlidePosition();
  // }

  // next(): void {
  //   this.currentSlide = (this.currentSlide >= this.items.length - this.visibleItems) ? 0 : this.currentSlide + this.visibleItems;
  //   this.updateSlidePosition();
  // }

  // updateSlidePosition(): void {
  //   const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
  //   carouselInner.style.transform = `translateX(-${this.currentSlide * (100 / this.visibleItems)}%)`;
  // }
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js');
    this.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js');
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
}
// эта чухня подгружает скрипты для работы карусели


//   updateSlidePosition(): void {
//     const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
//     carouselInner.style.transform = `translateX(-${this.currentSlide * (100 / this.visibleItems)}%)`;
//   }
// }
