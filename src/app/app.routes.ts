import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DiscentiComponent } from './discenti/discenti/discenti.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'discenti', component: DiscentiComponent },
  { path: '**', redirectTo: '' }
];
