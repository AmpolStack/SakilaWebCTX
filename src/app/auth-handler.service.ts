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

  public ObtainAuthentication(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/staff/open/obtainAuthentication`, {
      username,
      password,
    });
  }
}

export interface AuthCredentials {
  token: string;
  refreshToken: string;
}

export interface AuthResponse {
  data: AuthCredentials;
  error: string | null;
  success: boolean;
}