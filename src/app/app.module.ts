import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { ABCComponent } from './abc/abc.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
@NgModule({
  declarations: [
    AppComponent,
    ABCComponent

  ],
  imports: [
    BrowserModule,
    jqxGridModule,
    jqxChartModule,
    jqxButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
