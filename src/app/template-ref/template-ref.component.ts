import { AfterViewInit, Component,Input,OnDestroy,OnInit,Output,ViewChild ,TemplateRef} from '@angular/core';
// import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject,map } from 'rxjs';

import { ADTSettings,  } from 'angular-datatables/src/models/settings';
import {TempRefComponent} from '../temp-ref/temp-ref.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit,AfterViewInit,OnDestroy {
  constructor(private http:HttpClient){

  }
  @ViewChild(DataTableDirective, {static: false})
    dtElement: any;
   
    dtOptions: DataTables.Settings = {};
  
    dtTrigger: Subject<any>= new Subject<any>();
  
    ngOnInit(): void {
      this.dtOptions = {
        ajax:  (dataTablesParameters: any, callback) => {
          this.http
            .get(
              'https://jsonplaceholder.typicode.com/posts',
              dataTablesParameters
            ).pipe(
              map((response: any) => response
              )
            )
            .subscribe((resp:any) => {
               resp;
               console.log(resp)
              callback({
                recordsTotal: resp.length,
                recordsFiltered: resp.length,
                data: resp,
              });
            });
        },
        columns: [{
          title: 'ID',
          data: 'id'
        }, {
          title: 'First name',
          data: 'title',
          className:'none'
        },
        //  {
        //   title: 'Last name',
        //   data: 'lastName'
        // }
      ],
      responsive: true,
      };
    }
  
    ngAfterViewInit(): void {
      this.dtTrigger.next(null);
    }
  
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
  
    rerender(): void {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next(null);
      });
    }

}


// import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { DataTableDirective } from 'angular-datatables';
// import { Subject } from 'rxjs';

// @Component({
//   selector: 'app-rerender',
//   templateUrl: 'rerender.component.html'
// })
// export class RerenderComponent implements AfterViewInit, OnDestroy, OnInit {
//   @ViewChild(DataTableDirective, {static: false})
//   dtElement: DataTableDirective;

//   dtOptions: DataTables.Settings = {};

//   dtTrigger: Subject = new Subject();

//   ngOnInit(): void {
//     this.dtOptions = {
//       ajax: 'data/data.json',
//       columns: [{
//         title: 'ID',
//         data: 'id'
//       }, {
//         title: 'First name',
//         data: 'firstName'
//       }, {
//         title: 'Last name',
//         data: 'lastName'
//       }]
//     };
//   }

//   ngAfterViewInit(): void {
//     this.dtTrigger.next();
//   }

//   ngOnDestroy(): void {
//     // Do not forget to unsubscribe the event
//     this.dtTrigger.unsubscribe();
//   }

//   rerender(): void {
//     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       // Destroy the table first
//       dtInstance.destroy();
//       // Call the dtTrigger to rerender again
//       this.dtTrigger.next();
//     });
//   }
// }
