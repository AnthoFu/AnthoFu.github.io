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
      position: {
        en: 'Jr. Full-Stack Developer',
        es: 'Desarrollador Full-Stack Jr.'
      },
      period: 'Oct. 2025 - Present',
      description: {
        en: 'Working on banking technology solutions, contributing to full-stack development and system optimization.',
        es: 'Trabajando en soluciones de tecnología bancaria, contribuyendo al desarrollo full-stack y la optimización de sistemas.'
      },
      logoUrl: 'images/logos/logo_btc.png',
      isCurrent: true
    },
    {
      company: 'Canguro Venezuela',
      position: {
        en: 'Jr. Full-Stack Developer',
        es: 'Desarrollador Full-Stack Jr.'
      },
      period: 'Nov. 2024 - Oct. 2025',
      description: {
        en: 'I actively participated in the migration of the Odoo 15 ERP system to Odoo 17, collaborating in the implementation of new key functionalities. I performed maintenance and optimization of existing web applications (Angular), resolving bugs and improving the user experience. I designed and implemented custom automation rules in Odoo 17 for user and audit management. I optimized complex queries in SQL, BigQuery, and MongoDB databases to improve the performance of internal reports and developed ETL processes and scripts in Jupyter Notebooks (Python) for cleaning and standardizing data from different sources, ensuring the consistency of the information for later analysis and loading into the system.',
        es: 'Participé activamente en la migración del sistema ERP Odoo 15 a Odoo 17, colaborando en la implementación de nuevas funcionalidades clave. Realicé el mantenimiento y la optimización de las aplicaciones web existentes (Angular), resolviendo errores y mejorando la experiencia del usuario. Diseñé e implementé reglas de automatización personalizadas en Odoo 17 para la gestión de usuarios y auditorías. Optimicé consultas complejas en bases de datos SQL, BigQuery y MongoDB para mejorar el rendimiento de los informes internos y desarrollé procesos ETL y scripts en Jupyter Notebooks (Python) para limpiar y estandarizar datos de diferentes fuentes, asegurando la consistencia de la información para su posterior análisis y carga en el sistema.'
      },
      logoUrl: 'images/logos/logo_canguro.png',
      isCurrent: false
    }
  ];

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}
