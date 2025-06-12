import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from './app.config';
import { Observable } from 'rxjs';
import { ApiResponse } from './auth-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl : string = inject(API_URL);
  private http : HttpClient = inject(HttpClient);
  
  public ObtainFilmsByCategories() : Observable<ApiResponse<category[]>>{
    return this.http.get<ApiResponse<category[]>>(`${this.apiUrl}/films/getFilmsWithCategories`)
  }

  public ObtainFilmByReferenceId(referenceId : string) : Observable<ApiResponse<Expensefilm>>{
    return this.http.get<ApiResponse<Expensefilm>>(`${this.apiUrl}/films/getFilm?referenceId=${referenceId}`)
  }
}

export interface Expensefilm{
  title : string;
  description : string;
  release_year: number;
  rental_duration: number;
  rental_rate: number;
  length: number;
  replacement_cost: number;
  rating: string;
  special_features: string;
  last_update: Date;
  language: string;
  actorsNames: string[];
}

export interface Minimalfilm{
  referenceId: string;
  title : string;
  imageBlob : string;
}

export interface category{
  name: string;
  films : Minimalfilm[];
}