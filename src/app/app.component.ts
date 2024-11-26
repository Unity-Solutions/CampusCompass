import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { AddBlockCheckService } from './application/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(private addBlockService: AddBlockCheckService) {}
  public isShown = false
  ngAfterViewInit() {
    // Подписываемся на Observable и обновляем isShown
    this.addBlockService.isAddBlock$.subscribe((status) => {
      console.log(status)
      this.isShown = status
    })
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     console.log(this.addBlockService.isAddBlock)
  //     this.isShown = this.addBlockService.isAddBlock
  //   }, 600)
  // }
}
