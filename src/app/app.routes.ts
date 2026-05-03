import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { LanguageSelectionComponent } from './pages/language-selection/language-selection.component';
import { languageGuard, rootGuard } from './guards/language.guard';

export const routes: Routes = [
    { 
        path: '', 
        component: LanguageSelectionComponent, 
        title: 'Choose Language | AnthoFu',
        canActivate: [rootGuard]
    },
    { 
        path: 'language', 
        component: LanguageSelectionComponent, 
        title: 'Change Language | AnthoFu'
    },
    { 
        path: 'home', 
        component: HomeComponent, 
        title: 'Home | AnthoFu',
        canActivate: [languageGuard]
    },
    { 
        path: 'about', 
        component: AboutComponent, 
        title: 'About | AnthoFu',
        canActivate: [languageGuard]
    },
    { 
        path: 'projects', 
        component: ProjectsComponent, 
        title: 'Projects | AnthoFu',
        canActivate: [languageGuard]
    },
    { 
        path: 'projects/:slug', 
        component: ProjectDetailsComponent,
        canActivate: [languageGuard]
    },
    { path: '**', redirectTo: '' }
];