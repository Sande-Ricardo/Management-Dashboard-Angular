import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  // Local
  private apiUrl = 'http://localhost:8080/ai/ask'
  // Production
  // private apiUrl = 'https://m-dashboard-8hn2.onrender.com/ai/ask'

  constructor( private http:HttpClient ) { }

  sendPrompt(prompt:string):Observable<string>{
      // return this.http.post(this.apiUrl, { prompt }, { responseType: 'text' });

      try {
        return this.http.post(this.apiUrl, {prompt}, { responseType: 'text' });
      } catch (error) {
        console.error('Error in sendPrompt:', error);
      }
      return new Observable<string>(observer => {
        observer.error('Failed to send prompt');
      });
  }



}