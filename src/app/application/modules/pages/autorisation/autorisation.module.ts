import { NgModule, provideZoneChangeDetection } from '@angular/core'

import {
  RegLandingComponent,
  RegBlockComponent,
  LoginBlockComponent,
  LoginLandingComponent,
  RegistrationComponent,
  LogInComponent,
} from './'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../../../shared/shared.module'
import { provideRouter, RouterModule } from '@angular/router'
import { routes } from './autorisation.routes'
import { AuthService } from './services/auth.service'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import {
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics'
import { provideAppCheck } from '@angular/fire/app-check'
import { provideAuth } from '@angular/fire/auth'
import { provideDatabase } from '@angular/fire/database'
import { provideFirestore } from '@angular/fire/firestore'
import { provideFunctions } from '@angular/fire/functions'
import { provideMessaging } from '@angular/fire/messaging'
import { provideStorage } from '@angular/fire/storage'
import { getAnalytics } from 'firebase/analytics'
import {
  ReCaptchaEnterpriseProvider,
  ReCaptchaV3Provider,
  initializeAppCheck,
} from 'firebase/app-check'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getMessaging } from 'firebase/messaging'
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from '../../../../../../credentials'

@NgModule({
  providers: [
    AuthService,
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaV3Provider(
        '6LfjUVQqAAAAAK2pGa1Et7X4VtWcSE0m3-pX7cEo'
      )
      return initializeAppCheck(undefined, {
        provider,
        isTokenAutoRefreshEnabled: true,
      })
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
  declarations: [
    LogInComponent,
    LoginBlockComponent,
    RegistrationComponent,
    RegBlockComponent,
    RegLandingComponent,
    LoginLandingComponent,
  ],
  imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [
    LogInComponent,
    LoginBlockComponent,
    RegistrationComponent,
    RegBlockComponent,
    RegLandingComponent,
    LoginLandingComponent,
  ],
})
export class AutorisationModule {}
