import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor() {
    this.items = [
      "uno",
      "2",
      "tres",
      "uno",
      "uno",
      "uno",
      "uno"
    ]
  }

  ngOnInit(): void {
  }


  items:string[] = []
}
