import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StepService } from '../core/services/step.service';
import { RepositoryService } from '../core/services/repository.service';
import { Model } from '../core/interfaces/model';

@Component({
  selector: 'app-model-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './model-selection.component.html',
  styleUrl: './model-selection.component.css',
})
export class ModelSelectionComponent implements OnInit {
  colorSelect?: string;
  modelSelect?: string;

  constructor(
    public stepService: StepService,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    this.colorSelect = this.stepService.selectedColor;
    this.modelSelect = this.stepService.selectedModel;
    this.repositoryService.getModels().subscribe((models: Model[]) => {
      console.log(models);
    });
  }

  onModelChange(): void {
    if (this.modelSelect) {
      this.stepService.selectedModel = this.modelSelect;
    }
  }

  onColorChange(): void {
    if (this.colorSelect) {
      this.stepService.selectedColor = this.colorSelect;
    }
  }
}
