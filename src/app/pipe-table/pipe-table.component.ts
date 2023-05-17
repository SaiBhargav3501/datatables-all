import { UpperCasePipe, CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';

@Component({
  selector: 'app-pipe-table',
  templateUrl: './pipe-table.component.html',
  styleUrls: ['./pipe-table.component.css']
})
export class PipeTableComponent implements OnInit {
  constructor(
    private pipeInstance: UpperCasePipe, // inject the Pipe
    private pipeCurrencyInstance: CurrencyPipe, // inject the Pipe
    private pipelowercase:LowerCasePipe
  ) { }

  dtOptions: ADTSettings = {};

  ngOnInit(): void {

    this.dtOptions = {
      ajax: 'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [
        {
          title: 'Id (Money)',
          data: 'id',
          ngPipeInstance: this.pipeCurrencyInstance,
          ngPipeArgs: ['USD','symbol']
        },
        {
          title: 'First name',
          data: 'firstName',
          ngPipeInstance: this.pipeInstance
        },
        {
          title: 'Last name',
          data: 'lastName',
          ngPipeInstance: this.pipelowercase
        }
      ]
    };

  }

}
