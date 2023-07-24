import {Component, HostListener, Input,} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() aboutSectionId?: string;
  @Input() experienceSectionId?: string
  @Input() skillsSectionId?: string
  @Input() projectsSectionId?: string
  @Input() contactSectionId?: string
  scrollPosition: number = 0;

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToAbout() {
    if (this.aboutSectionId) {
      this.viewportScroller.scrollToAnchor(this.aboutSectionId);
    }
  }

  scrollToSkills() {
    if (this.skillsSectionId != null) {
      this.viewportScroller.scrollToAnchor(this.skillsSectionId)
    }
  }

  scrollToExperience() {
    if (this.experienceSectionId) {
      this.viewportScroller.scrollToAnchor(this.experienceSectionId)
    }
  }

  scrollToProjects() {
    if (this.projectsSectionId) {
      this.viewportScroller.scrollToAnchor(this.projectsSectionId)

    }
  }

  scrollToContact() {
    if (this.contactSectionId) {
      this.viewportScroller.scrollToAnchor(this.contactSectionId)
    }
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollPosition = (window.pageYOffset / totalScroll) * 100;
  }
}
