import { Component,ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nest',
  templateUrl: './nest.component.html',
  //styleUrls: ['./nest.component.css']
})
export class NestComponent  {
@ViewChild('nestGrid' , {static:false}) nestGrid:jqxGridComponent;
fill :any;
constructor( private http: HttpClient) {
}
source: any=
{
  datafields:
      [
      {name: 'Country_ID'},
      {name: 'Name' },
      {name: 'Sort_Name'},
      {name: 'Active'},
      {name: 'Currency_ID'},
      {name: 'ISDCode'}
      ],
      id: 'Country_ID',
      datatype: 'json',
      url:'http://localhost:52914/api/ServiceMaster/GetCountryMasters'
    };
     CountryAdapter = new jqx.dataAdapter(this.source);

    getWidth() : any {
      if (document.body.offsetWidth < 750) {
        return '90%';
      }
      return 750;
    }
    statesource:any=
    {
      datafields:[
        {name: 'Country_ID', type: 'string'},
        {name: 'State_ID', type: 'string'},
        {name: 'State_Name', type: 'string'}
      ],
      // root: 'states',
      //  record: 'state',
      datatype: 'json'

    };
     stateDataAdapter = new jqx.dataAdapter(this.statesource , { autoBind: true } );
    nestedGrids: any [] =new Array();
    /*Create Nested Grid*/
    initRowDetails = (index: number, parentElement: any, gridElement: any, record: any): void => {
      console.log("Hmm");
      let id = record.uid.toString("id");
      this.http.get(`http://localhost:52914/API/ServiceMaster/GetStateMasters/` + id ).subscribe
      (data => { console.log (data);
        this.statesource = data;
        let states = this.stateDataAdapter.records;
        let nestedGridContainer = parentElement.children[0];
        this.nestedGrids[index] = nestedGridContainer;
        let statesource = {
          datafields:[
            {name: 'Country_ID', type: 'string'},
            {name: 'State_ID', type: 'string'},
            {name: 'State_Name', type: 'string'}
          ],
          id: 'State_ID',
          localdata:this.statesource
        }
        let nestedGridAdapter = new jqx.dataAdapter(statesource);
        if (nestedGridContainer != null){
          let settings = {
            width:680,
            height: 200,
            source: nestedGridAdapter,
            columns:[
              { text: 'Country_ID', datafield: 'Country_ID'},
              { text: 'State_ID', datafield: 'State_ID'},
              { text: 'State Name', datafield: 'State_Name'}
            ]
          };
          jqwidgets.createInstance(`#${nestedGridContainer.id}`, 'jqxGrid', settings);
        }
        }, error => console.log(error));
      this.stateDataAdapter = this.statesource;
      console.log("Has" + id);
     }
     renderer = (row: number, column: any, value: string): string => {
       return'<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
     }
    rowdetailstemplate: any={
      // rowdetails: '<div id="nestedGrid"  [(ngModel)]="fill" style="margin: 10px;"></div>', rowdetailsheight: 220, rowdetailshidden: true
      rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>', rowdetailsheight: 220, rowdetailshidden: true
    };
    ready = (): void=> {
      console.log("Hello");
      this.nestGrid.showrowdetails(0);
    };
    columns: any[] =
    [
       {text: 'Country Id', datafield: 'Country_ID', width: 100, cellsrenderer: this.renderer  },
       {text: 'Country Name', datafield: 'Name' , cellsrenderer: this.renderer  },
       {text: 'Short Name', datafield: 'Sort_Name' , cellsrenderer: this.renderer  },
       {text: 'IsActive', datafield: 'Active'  , cellsrenderer: this.renderer },
       {text: 'Currency Id', datafield: 'Currency_ID' , cellsrenderer: this.renderer  },
       {text: 'ISD Code', datafield: 'ISDCode'  , cellsrenderer: this.renderer }
    ];
    selectcountrygetstate(Country_ID){
      this.http.get(`http://localhost:52914/API/ServiceMaster/GetStateMasters` + Country_ID).subscribe
      (data => { console.log (data);
        this.statesource = data;
        }, error => console.log(error));
    }

    }






