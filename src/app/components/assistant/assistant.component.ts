import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
// import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
// import { GoogleGenerativeAI } from '@google/generative-ai';



@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssistantComponent implements OnInit {

  constructor(
    private localStorageSv:LocalStorageService
  ) { 
    this.questions = localStorageSv.getChatbotQuestions;
    this.answers = localStorageSv.getChatbotAnswers
  }

  ngOnInit(): void {

  }

// ------------------------------------------ Mock -------------------------------------------------
str:string= `# hola`

// --------------------------------------- Variables -----------------------------------------------
inputText: string = '';
// responseText: string = this.answers[this.answers.length -1];

questions!:string[];
answers!:string[];

// ---------------------------------------- Methods ------------------------------------------------
  async consult() {
    const API_KEY = 'AIzaSyBZj-3belUwS6vehWUEwPuf-RDRWI4MbfY';
    // const API_KEY = 'AIzaSyBZj-3belUwS6vehWUEwPuf-RDRWI4MbsY';

    // Acceder al GoogleGenerativeAI desde el objeto global "window"
    const GoogleGenerativeAI = (window as any).GoogleGenerativeAI;
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-pro-latest',
    });

    this.questions.push(this.inputText);

    try {
      const result = await model.generateContent(this.inputText);
      // this.responseText = result.response.text();
      this.answers.push(result.response.text());
      console.log("try");
      this.inputText = '';

      this.localStorageSv.setChatbotQuestions = this.questions;
      this.localStorageSv.setChatbotAnswers = this.answers;
    } catch (error) {
      console.error('Error al generar contenido:', error);
      // this.responseText = 'Error al generar contenido';
    }
  }

  cleanChatBot(){
    this.localStorageSv.setChatbotQuestions = [];
    this.localStorageSv.setChatbotAnswers = [];
    this.questions = [];
    this.answers = [];
  }


}
