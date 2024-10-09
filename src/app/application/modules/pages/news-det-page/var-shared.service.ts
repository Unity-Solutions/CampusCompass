import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class VarSharedService {
  newsName: string = 'Four strategies for remembering everything you learn'
  date: string = '01.01.2024'
  author: string = 'Drake Baer'
  authorPosition: string = 'Business Insider'
  newsImageUrl: string = '/img/news-page/news-images/news-image.1.png'
  newsContent: string =
    "<p>If you're going to learn anything, you need two kinds of prior knowledge:</p>\n" +
    '<ul>\n' +
    '  <li>knowledge about the subject at hand, like math, history, or programming</li>\n' +
    '  <li>knowledge about how learning actually works</li>\n' +
    '</ul>' +
    '<p>The bad news: Our education system kinda skips one of them, which is terrifying, given that your ability to learn is such a huge predictor of success in life, from achieving in academics to getting ahead at work. It all requires mastering skill after skill.</p>\n' +
    "<p>“Parents and educators are pretty good at imparting the first kind of knowledge,” shares psych writer Annie Murphy Paul. “We're comfortable talking about concrete information: names, dates, numbers, facts. But the guidance we offer on the act of learning itself - the 'meta-cognitive' aspects of learning - is more hit-or-miss, and it shows.”</p>\n" +
    "<p>To wit, new education research shows that low-achieving students have “substantial deficits” in their understanding of the cognitive strategies that allow people to learn well. This, Paul says, suggests that part of the reason students perform poorly is that they don't know a lot about how learning actually works.</p>\n" +
    "<p>It's a culture-wide issue.</p>\n" +
    '<p>Henry Roediger and Mark McDaniel, psychologists at Washington University in St. Louis and coauthors of Make It Stick: The Science Of Successful Learning, say that “how we teach and study is largely a mix of theory, lore, and intuition.”</p>\n' +
    "<p>So let's cut through that lore. Here are learning strategies that really work.</p>\n" +
    '<h1>Force yourself to recall</h1>\n' +
    "<p>The least-fun part of effective learning is that it's hard. In fact, the “Make It Stick” authors contend that when learning if difficult, you're doing your best learning, in the same way that lifting a weight at the limit of your capacity makes you strongest.</p>\n"
}
