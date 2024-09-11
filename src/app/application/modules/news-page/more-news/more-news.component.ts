import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

interface News {
  title: string;
  imageUrl: string;
  description: string;
  author: string;
  authorPosition: string;
  date: string;
  newsUrl: string;
}
@Component({
  selector: 'app-more-news',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './more-news.component.html',
  styleUrl: './more-news.component.scss'
})
export class MoreNewsComponent {
  newsItems: News[] = [
    {
      title: 'Four strategies for remembering everything you learn.',
      imageUrl: '/img/news-page/news-images/news-image.1.png',
      description: 'If you\'re going to learn anything, you need two kinds of prior knowledge: • knowledge about the subject at hand, like math, history, or programming • knowledge about how learning actually works. The bad news: Our education system kinda skips one [...]',
      author: 'Drake Baer',
      authorPosition: 'Business Insider',
      date: '01.01.2024',
      newsUrl: '/'
    },
    {
      title: 'Four strategies for remembering everything you learn.',
      imageUrl: '/img/news-page/news-images/news-image.2.png',
      description: "New figures released by ChildLine have shown a concerning rise in the number of young people seeking help for stress in the run up to the exam period. The free 24-hour counselling service said it [...] ",
      author: 'Drake Baer',
      authorPosition: 'Student Editor',
      date: '01.01.2024',
      newsUrl: '/'
     },
    {
      title: 'What your choice of university degree means for your future earnings',
      imageUrl: '/img/news-page/news-images/news-image.3.png',
      description: 'The mass expansion of higher education, the arrival of high fees in English and Welsh universities, the ongoing technology revolution and the Great Recession have pushed and pulled the graduate labour [..]',
      author: 'Drake Baer',
      authorPosition: 'Business Insider',
      date: '01.01.2024',
      newsUrl: '/'
    },
  ]
}
