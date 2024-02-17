import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { StepService } from '../core/services/step.service';
import { RepositoryService } from '../core/services/repository.service';
import { Option } from '../core/interfaces/option';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css',
})
export class ConfigComponent {
  option$?: Observable<Option>;

  constructor(
    public stepService: StepService,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    this.option$ = this.repositoryService.getOption(
      this.stepService.selectedModel!.code
    );
  }
}
