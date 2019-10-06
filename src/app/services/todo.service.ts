import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Todo} from '../models/todo';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Pagination} from '../utils/pagination';
import {HttpParamsOptions} from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.apiUrl + '/api/todos';

  constructor(public http: HttpClient) {
  }


  public findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  public findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  public save(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  public update(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, todo);
  }

  public deleteById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  public getAllByPage(page): Observable<Pagination<Todo>> {

    if (page < 0) {
      page = 0;
    }

    return this.http.get<Pagination<Todo>>(`${this.apiUrl}/page`, {
        params: {
          page
        }
      }
    );
  }

}
