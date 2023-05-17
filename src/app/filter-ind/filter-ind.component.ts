import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { JsonPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { map } from 'rxjs';
import { data } from 'jquery';

class DataTablesResponse {
  data: any;
  draw?: number;
  recordsFiltered?: number;
  recordsTotal?: number;
}

@Component({
  selector: 'app-filter-ind',
  templateUrl: './filter-ind.component.html',
  styleUrls: ['./filter-ind.component.css']
})
export class FilterIndComponent implements OnInit ,OnDestroy,AfterViewInit{
  constructor( private http:HttpClient){
  }
  @ViewChild(DataTableDirective, {static: false})
    a:any
    users: any=[] ;
    showContent:any=false
    dtElement:any
  

    

    dtOptions: DataTables.Settings = {};
    dtTrigger:Subject<any> = new Subject()

    ngOnInit(): void {
      this.dtOptions = {
        serverSide: false, 
        processing: true,
      
        searching: true,
        pagingType: 'full_numbers',
        lengthMenu: [ 10, 25, 50, 75, 100 ],
        
        ajax: (dataTablesParameters: any, callback) => {
          this.http
            .get <any>(  
              'https://jsonplaceholder.typicode.com/posts',
              dataTablesParameters
            ).pipe(
              map((response: any) => response
              )
            ).subscribe((resp:any) => {
              resp
              console.log(resp)
              
            // this.dtTrigger.next(true)
              callback({
                data: resp,
                recordsTotal: resp.length,
                recordsFiltered: resp.length,
                // recordsTotal: resp.recordsTotal,
                // recordsFiltered: resp.recordsFiltered,
              });
            });
          
        },
        columns: [{
          title: 'ID',
          data:'id'
    
        },
        {
          title: 'Message',
          data:'title',
          className:'none'
    
        },
        ],
        responsive: true,
    
        // Use this attribute to enable colreorder
      };
      // this.dtTrigger.next(null)
    }

    ngAfterViewInit(): void {
      this.dtTrigger.next(null);
    
    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe()
      // this.dtTrigger.next(null)
    }

    // rerender(): void {
    //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //     // Destroy the table first
    //     dtInstance.destroy();
    //     // Call the dtTrigger to rerender again
    //     this.dtTrigger.next(null);
    //   });
    // }
    // 
    // https://jsonplaceholder.typicode.com/posts
    // rerender(){
      
    // }


    rerender(): void {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        console.log(this.dtElement)
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next(null);
      });
    }

}
