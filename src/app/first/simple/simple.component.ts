import { NgStyle } from '@angular/common';
import { Component,ViewChild,ViewEncapsulation  } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleComponent  {
  @ViewChild('grid', { static: false }) grid: jqxGridComponent;

    columns = [
		{text: 'Id', datafield: 'id'},
		{text: 'Name', datafield: 'name'}
  ];

  source = new jqx.dataAdapter({
		localData:[
		  {id: 1, name: 'Hydrogen'},
		  {id: 2, name: 'Helium'},
		  {id: 3, name: 'Lithium'},
		  {id: 4, name: 'Beryllium'},
		  {id: 5, name: 'Boron'},
		  {id: 6, name: 'Carbon'},
		  {id: 7, name: 'Nitrogen'},
		  {id: 8, name: 'Oxygen'},
		  {id: 9, name: 'Fluorine'},
		  {id: 10, name: 'Neon'},
		  {id: 11, name: 'Sodium'},
		  {id: 12, name: 'Magnesium'},
		  {id: 13, name: 'Aluminum'},
		  {id: 14, name: 'Silicon'},
		  {id: 15, name: 'Phosphorus'},
		  {id: 16, name: 'Sulfur'},
		  {id: 17, name: 'Chlorine'},
		  {id: 18, name: 'Argon'},
  		{id: 19, name: 'Potassium'},
  		{id: 20, name: 'Calcium'}
  		]
  	 });
     source1: any =
     {   datatype: 'json',
         datafields: [
          {name: 'Country_ID'},
          {name: 'Name' },
          {name: 'Sort_Name'},
          {name: 'Active'},
          {name: 'Currency_ID'},
          {name: 'ISDCode'}
         ],
         url:'http://localhost:52914/api/ServiceMaster/GetCountryMasters'
     };
     Grid1Adapter: any = new jqx.dataAdapter(this.source1);
     Grid1columns: any[] =
     [
      {text: 'Country Id', datafield: 'Country_ID' },
      {text: 'Country Name', datafield: 'Name'  },
      {text: 'Short Name', datafield: 'Sort_Name'  },
      {text: 'IsActive', datafield: 'Active' },
      {text: 'Currency Id', datafield: 'Currency_ID' },
      {text: 'ISD Code', datafield: 'ISDCode'  }
     ];
     source2: any =
     {
         datatype: 'json',
         datafields: [
             { name: 'Currency_ID', type: 'string' },
             { name: 'Name', type: 'string' }
         ],
        url:'http://localhost:52914/api/ServiceMaster/GetCurrencyMasters'
     };
     Grid2Adapter2: any = new jqx.dataAdapter(this.source2);
     Grid2columns2: any[] =
     [
         { text: 'Currency Id', datafield: 'Currency_ID'},
         { text: 'Currency Name', datafield: 'Name' }
     ];
 }



