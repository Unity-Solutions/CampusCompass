import { Component, AfterViewInit } from '@angular/core'
import Swiper from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss'],
})
export class PhotoCarouselComponent implements AfterViewInit {
  ngAfterViewInit() {
    Swiper.use([Navigation, Autoplay])
    new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}
