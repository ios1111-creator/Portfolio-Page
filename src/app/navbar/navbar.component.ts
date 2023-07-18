import {Component, Input, } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() aboutSectionId?: string;
  @Input() experienceSectionId?:string
  @Input() skillsSectionId?:string
  @Input() projectsSectionId?:string
  @Input() contactSectionId?:string
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToAbout() {
    if (this.aboutSectionId) {
      this.viewportScroller.scrollToAnchor(this.aboutSectionId);
    }
  }

  scrollToSkills(){
    if (this.skillsSectionId != null) {
      this.viewportScroller.scrollToAnchor(this.skillsSectionId)
    }
  }

  scrollToExperience(){
    if (this.experienceSectionId) {
      this.viewportScroller.scrollToAnchor(this.experienceSectionId)
    }
  }

  scrollToProjects(){
    if (this.projectsSectionId){
      this.viewportScroller.scrollToAnchor(this.projectsSectionId)

    }
  }
  scrollToContact(){
    if (this.contactSectionId){
    this.viewportScroller.scrollToAnchor(this.contactSectionId)
  }}
}
