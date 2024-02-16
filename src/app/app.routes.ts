import { Routes } from '@angular/router';
import { ModelSelectionComponent } from './model-selection/model-selection.component';
import { ConfigComponent } from './config/config.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: 'selection', component: ModelSelectionComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'selection' },
  { path: '**', component: ModelSelectionComponent },
];
