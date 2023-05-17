import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-table-data',
  templateUrl: './get-table-data.component.html',
  styleUrls: ['./get-table-data.component.css']
})
export class GetTableDataComponent implements OnInit,OnDestroy,AfterViewInit {

  dtElement: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  data: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: false,
      processing: false,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .get(
            'https://jsonplaceholder.typicode.com/posts',
            dataTablesParameters
          )
          .subscribe((resp:any) => {
            this.data = resp;
           
            callback({
              recordsTotal: resp.length,
              recordsFiltered: resp.length,
              data: this.data,
            });
          });
      },
      columns: [{ title: 'ID', data: 'id' }]
    };
    
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
    console.log("ftrhe")

  }
  ngOnDestroy(): void {
    console.log("sdgfuerygfu")
    this.dtTrigger.unsubscribe();
  }

}
