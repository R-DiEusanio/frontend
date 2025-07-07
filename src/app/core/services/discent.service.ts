import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discente } from '../../models/discente.model';

@Injectable({ providedIn: 'root' })
export class DiscentiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8085/discenti';

  getAll() {
    return this.http.get<Discente[]>(`${this.baseUrl}/lista`);
  }

  create(discente: Partial<Discente>) {
    return this.http.post<Discente>(`${this.baseUrl}/create`, discente);
  }

  update(id: number, discente: Partial<Discente>) {
  return this.http.put(`${this.baseUrl}/${id}`, discente);
}

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
