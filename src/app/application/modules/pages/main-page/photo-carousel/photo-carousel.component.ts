import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss'],
})
export class PhotoCarouselComponent implements OnInit {
  public arr_length: number = 5

  slides: any[] = new Array(this.arr_length).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  })

  ngOnInit(): void {
    this.slides[0] = {
      src: '/img/carousel/andrew-neel-cup.png',
    }
    this.slides[1] = {
      src: '/img/carousel/andrew-neel-young-woman-pc.png',
    }
    this.slides[2] = {
      src: '/img/carousel/pexels-cottonbro-news.png',
    }
    this.slides[3] = {
      src: '/img/carousel/andrew-neel-young-woman-pc.png',
    }
    this.slides[4] = {
      src: '/img/carousel/pexels-cottonbro-news.png',
    }
  }

  protected readonly Math = Math
}
