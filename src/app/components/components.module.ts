import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    ContactPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HomePageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    SharedModule,
    ContactPageComponent
  ]
})
export class ComponentsModule { }
