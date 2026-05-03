import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EN } from '../i18n/en';
import { ES } from '../i18n/es';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'selected_language';
  private platformId = inject(PLATFORM_ID);
  
  // Usamos un Signal para el idioma actual
  private currentLangSignal = signal<Language>(this.getInitialLanguage());

  currentLang = this.currentLangSignal.asReadonly();

  private dictionaries = {
    en: EN,
    es: ES
  };

  constructor() {}

  private getInitialLanguage(): Language {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.STORAGE_KEY) as Language;
      if (saved && (saved === 'en' || saved === 'es')) {
        return saved;
      }
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'es' ? 'es' : 'en';
    }
    return 'en'; // Default para SSR
  }

  setLanguage(lang: Language) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
    this.currentLangSignal.set(lang);
  }

  translate(key: string): string {
    const lang = this.currentLangSignal();
    const dictionary = this.dictionaries[lang];
    
    // Soporte para claves anidadas tipo 'HOME.GREETING'
    return key.split('.').reduce((obj: any, i) => (obj ? obj[i] : null), dictionary) || key;
  }
}
