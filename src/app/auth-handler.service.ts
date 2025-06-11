import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthHandlerService {
  private apiUrl : string = inject(API_URL);
  private http : HttpClient = inject(HttpClient);

  public ObtainAuthentication(username: string, password: string): Observable<ApiResponse<AuthCredentials>> {
    return this.http.post<ApiResponse<AuthCredentials>>(`${this.apiUrl}/staff/open/obtainAuthentication`, {
      username,
      password,
    });
  }
}

export interface AuthCredentials {
  token: string;
  refreshToken: string;
}

export interface ApiResponse<T> {
  data: T;
  error: string | null;
  success: boolean;
}