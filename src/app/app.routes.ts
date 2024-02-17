import { Routes } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { ConfigComponent } from './config/config.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: 'model', component: ModelComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'model' },
  { path: '**', component: ModelComponent },
];
