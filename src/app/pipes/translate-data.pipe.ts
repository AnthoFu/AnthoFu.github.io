import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'translateData',
  standalone: true,
  pure: false
})
export class TranslateDataPipe implements PipeTransform {
  private languageService = inject(LanguageService);

  transform(value: any): string {
    if (!value) return '';
    if (typeof value === 'string') return value;
    
    const lang = this.languageService.currentLang();
    return value[lang] || value['en'] || ''; // Fallback a inglés si no hay traducción
  }
}
