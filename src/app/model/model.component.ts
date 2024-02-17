import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StepService } from '../core/services/step.service';
import { RepositoryService } from '../core/services/repository.service';
import { Model } from '../core/interfaces/model';
import { Observable } from 'rxjs';
import { Color } from '../core/interfaces/color';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css',
})
export class ModelComponent implements OnInit {
  colorSelect?: Color;
  modelSelect?: Model;
  models$?: Observable<Model[]>;

  constructor(
    public stepService: StepService,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    this.modelSelect = this.stepService.selectedModel;
    this.colorSelect = this.stepService.selectedColor;
    this.models$ = this.repositoryService.getModels();
  }

  onModelChange(): void {
    if (this.modelSelect) {
      this.stepService.selectedModel = this.modelSelect;
      this.colorSelect = this.stepService.selectedColor;
    }
  }

  onColorChange(): void {
    if (this.colorSelect) {
      this.stepService.selectedColor = this.colorSelect;
    }
  }
}
