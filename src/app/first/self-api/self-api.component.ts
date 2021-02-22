import { NgStyle } from '@angular/common';
import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
declare var $;

@Component({
  selector: 'app-self-api',
  templateUrl: './self-api.component.html',
  styleUrls: ['./self-api.component.css']
})
export class SelfAPIComponent implements  AfterViewInit   {
  @ViewChild('myGrid') myGrid: jqxGridComponent;
  i: any;
   Source: any={
       datatype: 'json',
       datafields:[
         {name: 'Country_ID',type: 'string'},
         {name: 'Name',type: 'string'  },
         {name: 'Sort_Name',type: 'string'},
         {name: 'Active',type: 'boolean'},
         {name: 'Currency_ID',type: 'string'},
         {name: 'ISDCode',type: 'string'}
       ],
       id: 'id',
       url:'http://localhost:52914/api/ServiceMaster/GetCountryMasters/'
   };
   dataAdapter: any= new jqx.dataAdapter(this.Source);
   columns: any[]=[
     {text: 'Country Id',datafield: 'Country_ID'},
     {text: 'Country Name',datafield: 'Name'},
     {text: 'Short Name',datafield: 'Sort_Name'},
     {text: 'IsActive',datafield: 'Active'},
     {text: 'Currency Id',datafield: 'Currency_ID'},
     {text: 'ISD Code',datafield: 'ISDCode'}
   ];
   pagerrenderer = () => {
    let element = $("<div style='margin-top: 5px; width: 100%; height: 100%;'></div>");
    let paginginfo = this.myGrid.getpaginginformation();
    for (var i  = 0; i < paginginfo.pagescount;i++) {
        // add anchor tag with the page number for each page.
        let anchor = $("<a style='padding: 5px; color: blue;'>" + i + "</a>");
        anchor.appendTo(element);
        anchor.click((event) => {
            // go to a page.
            let pagenum = parseInt($(event.target).text());
            this.myGrid.gotopage(pagenum);
            // this.myGrid.gotonextpage();
            // this.myGrid.gotoprevpage();
        });
    }
    return element;

}
  constructor() { }
  ngAfterViewInit(): void
  {

  }
  ngOnInit(): void {
  }

}

