import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  imagesPath: string = environment.imagePath;
  selectedModel: string = '3';
  selectedColor: string = 'black';
  imageSrc: string = `${this.imagesPath}${this.selectedModel}/${this.selectedColor}.jpg`;
  imageAlt: string = `${this.selectedColor}.jpg`;
  isStep2Available: boolean = false;
  isStep3Available: boolean = false;

  constructor() {}
}
