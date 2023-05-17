import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resp-ex',
  templateUrl: './resp-ex.component.html',
  styleUrls: ['./resp-ex.component.css']
})
export class RespExComponent implements OnInit {
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
    
      ajax:{"url":'https://xtlncifojk.eu07.qoddiapp.com/',
    "method":'GET',
    context: document.body},
      columns: [{
        title: 'ID',
        data: 'id',
        
      }, {
        title: 'First name',
        data: 'firstName',
       
      }, {
        title: 'Last name',
        data: 'lastName',
        class: 'none'
      }],

      responsive: true
    };
  }

}
