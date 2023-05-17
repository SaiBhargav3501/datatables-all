import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-ext',
  templateUrl: './button-ext.component.html',
  styleUrls: ['./button-ext.component.css']
})
export class ButtonExtComponent implements OnInit {
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'pdf',
        'print',
        'spacer',
        'copy',
        'print',
        
        'excel',
        'csv',
        'excel',
        'pdf',
        {
            extend: 'spacer',
            style: 'bar'
        },
        'copy',
        'colvis',
        'searchBuilder',
        'selectRows',
        'selectColumns',
        'selectCells'
        
      ]
    };
  }
}


