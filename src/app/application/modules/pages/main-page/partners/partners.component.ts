import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { AddBlockCheckService } from '../../../../services'

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent implements AfterViewInit {
  @ViewChild('check') targetImg!: ElementRef

  constructor(private addBlockService: AddBlockCheckService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.targetImg.nativeElement.getAttribute('bis_size') !== null) {
        this.addBlockService.isAddBlock = true
        this.addBlockService.updateAddBlockStatus(true)
      }
    }, 400)
  }
}
