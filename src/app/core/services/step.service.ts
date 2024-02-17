import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { Color } from '../interfaces/color';
import { Config } from '../interfaces/config';
import { Model } from '../interfaces/model';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  imagesPath: string = environment.imagePath;
  private _selectedModel?: Model;
  private _selectedColor?: Color;
  private _selectedConfig?: Config;
  private _selectedTowHitch: boolean = false;
  private _selectedYoke: boolean = false;
  imageSrc: string = '';
  isStep2Available: boolean = false;
  isStep3Available: boolean = false;

  constructor(private toastrService: ToastrService) {}

  get selectedModel(): Model | undefined {
    return this._selectedModel;
  }

  set selectedModel(model: Model) {
    this._selectedModel = model;

    // First color selected by default
    this._selectedColor = model.colors[0];
    this.onModelSelected();
  }

  get selectedColor(): Color | undefined {
    return this._selectedColor;
  }

  set selectedColor(color: Color) {
    this._selectedColor = color;
    this.onModelSelected();
  }

  get selectedConfig(): Config | undefined {
    return this._selectedConfig;
  }

  set selectedConfig(config: Config) {
    this._selectedConfig = config;

    // If Step 3 wasn't available, we make it so
    this.grantStep3Access();
  }

  get selectedTowHitch(): boolean {
    return this._selectedTowHitch;
  }

  set selectedTowHitch(value: boolean) {
    this._selectedTowHitch = value;
  }

  get selectedYoke(): boolean {
    return this._selectedYoke;
  }

  set selectedYoke(value: boolean) {
    this._selectedYoke = value;
  }

  onModelSelected(): void {
    if (this._selectedModel && this._selectedColor) {
      // Reset config and options
      this.resetConfigAndOptions();

      // Show a new image
      this.imageSrc = `${this.imagesPath}${this._selectedModel.code}/${this._selectedColor.code}.jpg`;

      // If Step 2 wasn't available, we make it so
      this.grantStep2Access();
    }
  }

  grantStep2Access(): void {
    if (!this.isStep2Available) {
      this.toastrService.success('Step 2 available', 'Step 2', {
        positionClass: 'toast-bottom-center',
      });
      this.isStep2Available = true;
    }
  }

  grantStep3Access(): void {
    if (!this.isStep3Available) {
      this.toastrService.success('Step 3 available', 'Step 3', {
        positionClass: 'toast-bottom-center',
      });
      this.isStep3Available = true;
    }
  }

  resetConfigAndOptions(): void {
    this._selectedConfig = undefined;
    this.selectedTowHitch = false;
    this.selectedYoke = false;

    // We need to select a config again to go to Step 3
    this.isStep3Available = false;
  }
}
