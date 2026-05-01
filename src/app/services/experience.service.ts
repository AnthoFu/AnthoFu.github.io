import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      company: 'Banking Technologies Consulting',
      position: 'Jr. Full-Stack Developer',
      period: 'Oct. 2025 - Present',
      description: 'Aquí irá más experiencia sobre BTC.......',
      logoUrl: 'images/logo_btc.png',
      isCurrent: true
    },
    {
      company: 'Canguro Venezuela',
      position: 'Jr. Full-Stack Developer',
      period: 'Nov. 2024 - Oct. 2025',
      description: 'I actively participated in the migration of the Odoo 15 ERP system to Odoo 17, collaborating in the implementation of new key functionalities. I performed maintenance and optimization of existing web applications (Angular), resolving bugs and improving the user experience. I designed and implemented custom automation rules in Odoo 17 for user and audit management. I optimized complex queries in SQL, BigQuery, and MongoDB databases to improve the performance of internal reports and developed ETL processes and scripts in Jupyter Notebooks (Python) for cleaning and standardizing data from different sources, ensuring the consistency of the information for later analysis and loading into the system.',
      logoUrl: 'images/logo_canguro.png',
      isCurrent: false
    }
  ];

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}
