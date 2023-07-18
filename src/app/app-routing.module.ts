import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {HeaderComponent} from "./header/header.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SkillsComponent} from "./skills/skills.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  {path:'', component: HeaderComponent },
  {path: 'about',component:AboutMeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'work_experience', component: ExperienceComponent},
  {path:'contact', component: ContactComponent},
  {path:'projects', component:ProjectsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
