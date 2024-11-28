import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { routes } from './app.routes'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { ApplicationModule } from './application/application.module'
import { SharedModule } from './shared/shared.module'
import { NewsEditorModule } from './application/modules/pages/news-editor/news-editor.module'
import { VarSharedService } from './application/services'

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
    ApplicationModule,
    BrowserModule,
    SharedModule,
    NewsEditorModule,
  ],
  providers: [VarSharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
