import { Component, HostListener, Inject, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FooterComponent, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
  
  isMenuOpen = false;
  isScrolled = false;
  isVisible = true;
  isLanguageSelectionPage = false;
  private lastScrollTop = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      this.isLanguageSelectionPage = url === '/' || url === '/language';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const currentScroll = window.scrollY;
      
      // Determine if background should be solid
      this.isScrolled = currentScroll > 50;

      // Determine visibility (Smart Header)
      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        // Scrolling down - hide
        this.isVisible = false;
      } else {
        // Scrolling up - show
        this.isVisible = true;
      }
      
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
