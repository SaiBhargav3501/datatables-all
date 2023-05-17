
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ADTSettings,  } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs';
import {TempRefComponent} from '../temp-ref/temp-ref.component'

@Component({
  selector: 'app-comp-temp-ref',
  templateUrl: './comp-temp-ref.component.html',
  styleUrls: ['./comp-temp-ref.component.css']
})
export class CompTempRefComponent implements OnInit,AfterViewInit,OnDestroy {
 
  constructor() { }

  pageTitle = 'Using Angular TemplateRef';
  mdIntro = 'assets/docs/advanced/using-ng-template-ref/intro.md';
  mdHTML = 'assets/docs/advanced/using-ng-template-ref/source-html.md';
  mdTS = 'assets/docs/advanced/using-ng-template-ref/source-ts.md';

  dtOptions: ADTSettings = {};
  dtTrigger: Subject<ADTSettings> = new Subject<ADTSettings>();

  @ViewChild('demoNg') demoNg: TemplateRef<TempRefComponent> | any;
  message = '';

  ngOnInit(): void {
    // use setTimeout as a hack to ensure the `demoNg` is usable in the datatables rowCallback function
    setTimeout(() => {
      const self = this;
      this.dtOptions = {
        ajax: 'https://xtlncifojk.eu07.qoddiapp.com/',
        columns: [
          {
            title: 'ID',
            data: 'id'
          },
          {
            title: 'First name',
            data: 'firstName',
          },
          {
            title: 'Last name',
            data: 'lastName'
          },
          {
            title: 'Actions',
            data: null,
            defaultContent: '',
            ngTemplateRef: {
              ref: this.demoNg,
              context: {
                // needed for capturing events inside <ng-template>
                captureEvents: self.onCaptureEvent.bind(self)
              }
            }
          }
        ]
      };
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // race condition fails unit tests if dtOptions isn't sent with dtTrigger
      this.dtTrigger.next(this.dtOptions);
    }, 200);
  }

  onCaptureEvent(event: any) {
    this.message = `Event '${event.cmd}' with data '${JSON.stringify(event.data)}`;
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
