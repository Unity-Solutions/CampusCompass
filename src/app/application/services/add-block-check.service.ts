import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AddBlockCheckService {
  private addBlockSubject = new BehaviorSubject<boolean>(false)
  public isAddBlock$ = this.addBlockSubject.asObservable()

  updateAddBlockStatus(status: boolean) {
    this.addBlockSubject.next(status)
  }
  public isAddBlock: boolean = false
}
