import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corso } from '../../models/corso.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CorsiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8081/corsi';

  getAll(): Observable<Corso[]> {
    return this.http.get<Corso[]>(`${this.baseUrl}/list`);
  }

  create(corso: Partial<Corso>): Observable<Corso> {
    return this.http.post<Corso>(`${this.baseUrl}/create`, corso);
  }

  update(id: number, corso: Partial<Corso>): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, corso);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
