import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}
  criarUsuario(userData: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
