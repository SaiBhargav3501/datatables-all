import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-table-render',
  templateUrl: './table-render.component.html',
  styleUrls: ['./table-render.component.css']
})
export class TableRenderComponent implements OnDestroy,OnInit,AfterViewInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: any;
  
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();

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
      }]
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
    console.log(this.dtElement)
    console.log("jgheruigi.....")
  }

  ngOnDestroy(): void {
   console.log("jgheruigi")
    this.dtTrigger.unsubscribe();
    console.log(this.dtElement)
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    
    
      dtInstance.destroy();
      
      this.dtTrigger.next(null);
    });
    
      
  this.dtTrigger.next(null);
  }
  

}
