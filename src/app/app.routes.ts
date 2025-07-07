import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DiscentiComponent } from './discenti/discenti/discenti.component';
import { DocentiComponent } from './docenti/docenti/docenti.component';
import { CorsiComponent } from './corsi/corsi/corsi.componet';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'discenti', component: DiscentiComponent },
  {path: 'docenti', component: DocentiComponent},
  {path: 'corsi', component: CorsiComponent},
  { path: '**', redirectTo: '' }
];
