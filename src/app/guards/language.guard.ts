import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const languageGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  
  if (isPlatformBrowser(platformId)) {
    const savedLang = localStorage.getItem('selected_language');
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      return true;
    }
  }

  if (state.url !== '/') {
    return router.parseUrl('/');
  }

  return true;
};

export const rootGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const platformId = inject(PLATFORM_ID);

    if (isPlatformBrowser(platformId)) {
      const savedLang = localStorage.getItem('selected_language');
      if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
        return router.parseUrl('/home');
      }
    }
  
    return true;
  };
