import { Routes } from '@angular/router';

//Importar pages
import {HomeComponent} from './pages/home/home.component';
//Importar labs
import {LabsComponent} from './pages/labs/labs.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'labs',
        component: LabsComponent

    }
];
