import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { SimpleComponent } from './simple/simple.component';
import { SelfAPIComponent } from './self-api/self-api.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';
import { NestedgridComponent } from './nestedgrid/nestedgrid.component';
import { NestComponent } from './nest/nest.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { GroupingexampleComponent } from './groupingexample/groupingexample.component';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
@NgModule({
  declarations: [FirstComponent, SimpleComponent, SelfAPIComponent, LineChartComponent, PiechartComponent, NestedgridComponent, NestComponent, GroupingexampleComponent],
  imports: [
    CommonModule,
    jqxGridModule,
    jqxChartModule,
    jqxButtonModule,
    jqxDropDownButtonModule,
    HttpClientModule,
    jqxTabsModule,
    jqxInputModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
