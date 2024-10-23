import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { ApplicationModule } from './application/application.module'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getAuth, provideAuth } from '@angular/fire/auth'
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics'
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { getDatabase, provideDatabase } from '@angular/fire/database'
import { getFunctions, provideFunctions } from '@angular/fire/functions'
import { getMessaging, provideMessaging } from '@angular/fire/messaging'
import { getStorage, provideStorage } from '@angular/fire/storage'
import { firebaseConfig } from '../../credentials'

export const appProviders = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  ApplicationModule,
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth()),
  provideAnalytics(() => getAnalytics()),
  ScreenTrackingService,
  UserTrackingService,
  provideAppCheck(() => {
    // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
    const provider = new ReCaptchaEnterpriseProvider(
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
]
