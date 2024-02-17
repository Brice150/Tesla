import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Model } from '../core/interfaces/model';
import { RepositoryService } from '../core/services/repository.service';
import { StepService } from '../core/services/step.service';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css',
})
export class ModelComponent implements OnInit {
  models$?: Observable<Model[]>;

  constructor(
    public stepService: StepService,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    this.models$ = this.repositoryService.getModels();
  }
}
