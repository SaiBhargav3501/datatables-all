import { UpperCasePipe, CurrencyPipe,LowerCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeTableComponent } from './pipe-table/pipe-table.component';
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';
import { ButtonExtComponent } from './button-ext/button-ext.component';
import { RespExComponent } from './resp-ex/resp-ex.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FilterIndComponent } from './filter-ind/filter-ind.component';
import { TableRenderComponent } from './table-render/table-render.component';
import { GetTableDataComponent } from './get-table-data/get-table-data.component';
import { QuoteComponent } from './quote/quote.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { CompTempRefComponent } from './comp-temp-ref/comp-temp-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeTableComponent,
    ButtonExtComponent,
    RespExComponent,
    FilterTableComponent,
    FilterIndComponent,
    TableRenderComponent,
    GetTableDataComponent,
    QuoteComponent,
    TempRefComponent,
    TemplateRefComponent,
    CompTempRefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ UpperCasePipe,
    CurrencyPipe,LowerCasePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
