import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../interfaces/config';
import { Model } from '../interfaces/model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  getOptions(modelId: string): Observable<Config> {
    return this.http.get<Config>(`/options/${modelId}`);
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`/models`);
  }
}
