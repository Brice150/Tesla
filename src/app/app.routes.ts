import { Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { stepGuard } from './core/guard/step.guard';
import { ModelComponent } from './model/model.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: 'model', component: ModelComponent },
  { path: 'config', component: ConfigComponent, canActivate: [stepGuard] },
  { path: 'summary', component: SummaryComponent, canActivate: [stepGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'model' },
  { path: '**', component: ModelComponent },
];
