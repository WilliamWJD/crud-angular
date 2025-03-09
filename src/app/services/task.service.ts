import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Tarefa';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000';
  private endpoint = 'tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.apiUrl}/${this.endpoint}`);
  }

  deleteTask(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.delete<Tarefa>(
      `${this.apiUrl}/${this.endpoint}/${tarefa.id}`
    );
  }
}
