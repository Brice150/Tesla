import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Config } from '../core/interfaces/config';
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
  configSelect?: Config;
  option$?: Observable<Option>;
  towHitch: boolean = false;
  yoke: boolean = false;

  constructor(
    public stepService: StepService,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    this.configSelect = this.stepService.selectedConfig;
    this.towHitch = this.stepService.selectedTowHitch;
    this.yoke = this.stepService.selectedYoke;
    this.option$ = this.repositoryService.getOption(
      this.stepService.selectedModel!.code
    );
  }

  onConfigChange(): void {
    if (this.configSelect) {
      this.stepService.selectedConfig = this.configSelect;
    }
  }

  onTowChange(): void {
    this.stepService.selectedTowHitch = this.towHitch;
  }

  onYokeChange(): void {
    this.stepService.selectedYoke = this.yoke;
  }
}
