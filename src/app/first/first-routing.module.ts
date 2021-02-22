import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABCComponent } from '../abc/abc.component';
import { FirstComponent } from './first.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NestComponent } from './nest/nest.component';
import { NestedgridComponent } from './nestedgrid/nestedgrid.component';
import { PiechartComponent } from './piechart/piechart.component';
import { SelfAPIComponent } from './self-api/self-api.component';
import { SimpleComponent } from './simple/simple.component';
import { GroupingexampleComponent } from './groupingexample/groupingexample.component';


const routes: Routes = [{
   path: '', component: FirstComponent ,
   children:[
  {path:'simple', component: SimpleComponent },
  {path:'abc', component: ABCComponent},
  {path:'self-api', component:SelfAPIComponent },
  {path:'line-chart', component:LineChartComponent},
  {path:'piechart', component: PiechartComponent },
  {path:'nestedgrid', component: NestedgridComponent},
  {path:'nest', component: NestComponent },
  {path:'groupingexample', component:GroupingexampleComponent }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
