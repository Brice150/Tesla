import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepService } from '../core/services/step.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  constructor(public stepService: StepService) {}
}
