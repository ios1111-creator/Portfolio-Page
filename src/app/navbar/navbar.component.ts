import {Component, ElementRef, HostListener, Input, Renderer2,} from '@angular/core';
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
  isNavHidden: boolean = false
  lastScrollY = 0;

  constructor(private viewportScroller: ViewportScroller,
              private renderer: Renderer2,
              private el: ElementRef) {
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

    let scrollY = window.scrollY
    if (scrollY > this.lastScrollY) {
      console.log('down')
      this.isNavHidden = true
      this.renderer.addClass(this.el.nativeElement, 'nav--hidden')
    } else {
      console.log('up')
      this.isNavHidden = false
      this.renderer.removeClass(this.el.nativeElement, 'nav--hidden')
      this.renderer.removeClass(this.el.nativeElement,'sticky-top')
    }
    this.lastScrollY = scrollY
  }

}
