import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-temp-ref',
  templateUrl: './temp-ref.component.html',
  styleUrls: ['./temp-ref.component.css']
})
export class TempRefComponent implements OnInit,OnDestroy {

  
  @Output()
  emitter = new Subject<any>();

  @Input()
  data = {};

  ngOnInit(): void {}

  onAction1() {
    this.emitter.next({
      cmd: "action1",
      data: this.data,
    });
  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }




}