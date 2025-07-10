import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  // Local
  private apiUrl = 'http://localhost:8080/api/ai/ask'
  // Production
  // private apiUrl = 'https://m-dashboard-8hn2.onrender.com/apit/ai/ask'

  constructor( private http:HttpClient ) { }

  sendPrompt(prompt: string):Observable<string>{
      return this.http.post(this.apiUrl, { prompt }, { responseType: 'text' });
  }
}