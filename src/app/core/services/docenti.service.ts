import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { docente } from '../../models/docente.model';
import { root } from 'postcss';

@Injectable({providedIn: 'root'})
export class DocentiService {
  private http = inject(HttpClient);
  private baseUrl= 'http://localhost:8085/docenti';

  getAll() {
    return this.http.get<docente[]>(`${this.baseUrl}/lista`);
  }

  create(docente: Partial<docente>) {
    return this.http.post<docente>(`${this.baseUrl}/create`,docente);
  }

  update(id:number,docente: Partial<docente>) {
    return this.http.put(`${this.baseUrl}/${id}`,docente);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

