import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/principal-page/data-service.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor( public dataSv:DataServiceService) {
    
  }

  ngOnInit(): void {
  }

  addItem(){
    this.dataSv.addItem();
  }

  // items:string[] = []
}
