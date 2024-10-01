import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss']
})

export class PhotoCarouselComponent implements OnInit {
  currentSlide = 0;
  items = ['Find university', 'Find job', 'Proforientation', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];
  visibleItems = 3;

  constructor() { }

  ngOnInit(): void {
  }

  prev(): void {
    this.currentSlide = (this.currentSlide === 0) ? this.items.length - this.visibleItems : this.currentSlide - this.visibleItems;
    this.updateSlidePosition();
  }

  next(): void {
    this.currentSlide = (this.currentSlide >= this.items.length - this.visibleItems) ? 0 : this.currentSlide + this.visibleItems;
    this.updateSlidePosition();
  }

  updateSlidePosition(): void {
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    carouselInner.style.transform = `translateX(-${this.currentSlide * (100 / this.visibleItems)}%)`;
  }
}
