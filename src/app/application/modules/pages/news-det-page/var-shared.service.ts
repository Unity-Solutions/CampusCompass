import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarSharedService {
  newsName: string = "Four strategies for remembering everything you learn";
  date: string = "01.01.2024";
  author: string = "Drake Baer";
  authorPosition: string = "Business Insider"
  newsImageUrl: string = "/img/news-page/news-images/news-image.1.png"
}
