import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../interfaces/config';
import { Model } from '../interfaces/model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getOptions(modelId: string): Observable<Config> {
    return this.http.get<Config>(`${this.baseUrl}/options/${modelId}`);
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`${this.baseUrl}/models`);
  }
}
