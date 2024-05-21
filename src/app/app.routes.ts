import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokemon',
        pathMatch: 'full',
    }, 
    {
        path: 'pokemon',
        loadComponent: () => import('./pages/homepage/homepage.component').then(x => x.HomepageComponent)
    },
    {
        path: 'pokemon/category',
        loadComponent: () => import('./pages/category/category.component').then(x => x.CategoryComponent)
    },
    {
        path: '**',
        redirectTo: 'pokemon'
    }
];
