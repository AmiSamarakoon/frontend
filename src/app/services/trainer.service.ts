import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupInfo } from '../auth/signup-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseURL ="http://localhost:8080/api/trainers";

  constructor(private httpClient: HttpClient) { }

  getTrainerList():Observable<SignupInfo[]>{
    return this.httpClient.get<SignupInfo[]>(`${this.baseURL}`)
  }
}
