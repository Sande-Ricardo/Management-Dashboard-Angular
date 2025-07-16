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
      console.log(prompt);
      
      console.log({"prompt":prompt});

      try {
        return this.http.post(this.apiUrl, {prompt}, { responseType: 'text' });
      } catch (error) {
        console.error('Error in sendPrompt:', error);
        console.log("Error d");
        
      }
      return new Observable<string>(observer => {
        observer.error('Failed to send prompt');
        console.log("Error g");
        
      });
  }



}