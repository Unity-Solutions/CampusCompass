import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './pages.routes';
import {
  NewsPageModule,
  MainPageModule,
  ProfilePageModule,
  StudentsPageModule,
  UniversitiesPageModule,
  VacancyDetailsModule
} from "./";


@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), NewsPageModule, MainPageModule, ProfilePageModule, StudentsPageModule,UniversitiesPageModule, VacancyDetailsModule],
  exports: [],
})
export class PagesModule {
}
