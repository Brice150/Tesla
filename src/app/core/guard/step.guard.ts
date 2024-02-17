import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { StepService } from '../services/step.service';

export const stepGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const stepService = inject(StepService);
  const router = inject(Router);
  if (
    route.url[0].path &&
    route.url[0].path === 'config' &&
    !stepService.isStep2Available
  ) {
    router.navigate(['model']);
    return false;
  } else if (
    route.url[0].path &&
    route.url[0].path === 'summary' &&
    !stepService.isStep3Available
  ) {
    router.navigate(['model']);
    return false;
  } else {
    return true;
  }
};
