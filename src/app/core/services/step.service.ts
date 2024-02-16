import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  imagesPath: string = environment.imagePath;
  private _selectedModel?: string;
  private _selectedColor?: string;
  imageSrc: string = '';
  isStep2Available: boolean = false;
  isStep3Available: boolean = false;

  set selectedModel(model: string) {
    this._selectedModel = model;
    this.updateImageValues();
  }

  set selectedColor(color: string) {
    this._selectedColor = color;
    this.updateImageValues();
  }

  get selectedModel(): string | undefined {
    return this._selectedModel;
  }

  get selectedColor(): string | undefined {
    return this._selectedColor;
  }

  updateImageValues(): void {
    if (this._selectedModel && this._selectedColor) {
      this.imageSrc = `${this.imagesPath}${this._selectedModel}/${this._selectedColor}.jpg`;
      this.isStep2Available = true;
    } else {
      this.imageSrc = '';
      this.isStep2Available = false;
    }
  }
}
