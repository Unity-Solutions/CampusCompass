import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

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
      title: "Find university",
      id: 1
    }
    this.slides[1] = {
      src: '/img/carousel/andrew-neel-young-woman-pc.png',
      title: "Find job",
    }
    this.slides[2] = {
      src: '/img/carousel/pexels-cottonbro-news.png',
      title: "Proforientation",
    }
    this.slides[3] = {
      src: '/img/carousel/pexels-cottonbro-students.png',
      title: "Students",
    }
    this.slides[4] = {
      src: '/img/carousel/vasily-koloda-university.png',
      title: "News",
    }
  }

  protected readonly Math = Math
}
