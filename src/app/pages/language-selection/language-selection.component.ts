import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.scss'
})
export class LanguageSelectionComponent {
  private languageService = inject(LanguageService);
  private router = inject(Router);

  selectLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
    this.router.navigate(['/home']);
  }
}
