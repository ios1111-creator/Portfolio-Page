import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {FooterComponent} from './footer/footer.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {SkillsComponent} from './skills/skills.component';
import {ExperienceComponent} from './experience/experience.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
