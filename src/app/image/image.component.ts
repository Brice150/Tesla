import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepService } from '../core/services/step.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  constructor(public stepService: StepService) {}
}
