import { inject, Injectable } from '@angular/core'
import { AppCheck, provideAppCheck } from '@angular/fire/app-check'
import {
  Auth,
  idToken,
  signInWithEmailAndPassword,
  User,
} from '@angular/fire/auth'
import { BehaviorSubject, from, Subject, Subscription, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth)
  private appCheck = inject(AppCheck)
  idToken$ = idToken(this.auth)
  idTokenSubscription: Subscription

  private _userSubject$ = new BehaviorSubject<User | null>(null)

  public get user$() {
    return this._userSubject$.asObservable()
  }

  constructor() {
    this.idTokenSubscription = this.idToken$.subscribe(
      (token: string | null) => {
        //handle idToken changes here. Note, that user will be null if there is no currently logged in user.
        console.log(token) //TODO: save it and remove log
        this._userSubject$.next(this.auth.currentUser)
      }
    )
  }

  public logIn(password: string, email: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap((val) => {
        this._userSubject$.next(val.user)
      })
    )
  }

  public logOut() {
    return from(this.auth.signOut()).pipe(
      tap(() => {
        this._userSubject$.next(null)
      })
    )
  }

  public ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.idTokenSubscription.unsubscribe()
  }
}
