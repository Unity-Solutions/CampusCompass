import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { routes } from './app.routes'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { ApplicationModule } from './application/application.module'

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), ApplicationModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
