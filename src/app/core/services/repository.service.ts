import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../interfaces/model';
import { Option } from '../interfaces/option';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  getOption(modelCode: string): Observable<Option> {
    return this.http.get<Option>(`/options/${modelCode}`);
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`/models`);
  }
}
