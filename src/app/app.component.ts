import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //change
  standalone:false
})
export class AppComponent {
  title = 'Management-dashboard';
}
