import { Component, Input, OnInit } from '@angular/core';
import { Headline } from 'src/app/model/Headline';
import { DataServiceService } from 'src/app/principal-page/data-service.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  // @Input() task!:string[];
  @Input() headlines!:Headline[];

  constructor( public dataSv:DataServiceService) {  
  }

  ngOnInit(): void {
  }


  addItem(){
    this.dataSv.addItem();
  }

  // items:string[] = []
}
