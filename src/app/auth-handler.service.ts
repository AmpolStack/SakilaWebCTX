import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthHandlerService {
  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

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