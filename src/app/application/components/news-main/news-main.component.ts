import { Component } from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

interface News {
  title: string;
  imageUrl: string;
  description: string;
}
@Component({
  selector: 'app-news-main',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './news-main.component.html',
  styleUrl: './news-main.component.scss'
})
export class NewsMainComponent {
  newsItems: News[] = [
    {
      title: 'Best jobs on the market.',
      imageUrl: '/img/news-page/background-piece.png',
      description: 'what are they, and what do you need to know'
    },
    {
      title: 'Popular universities.',
      imageUrl: '/img/news-page/background-piece.png',
      description: 'what are they facing, and is it worth it'
    },
    {
      title: 'Hot professions.',
      imageUrl: '/img/news-page/background-piece.png',
      description: 'what is popular and makes you wanted by everyone'
    },
    {
      title: 'Tips for students.',
      imageUrl: '/img/news-page/background-piece.png',
      description: 'From students. how to tackle your university years'
    },
    {
      title: 'Top certifications.',
      imageUrl: '/img/news-page/background-piece.png',
      description: 'the certifications that will make you stand out'
    },
    {
      title: 'Interviews with the best students.',
      imageUrl: '/img/news-page/background-piece.png',
      description: 'their experience. their recommendations. the sucess'
    },
  ]
}
