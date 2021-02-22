import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';
@Component({
  selector: 'app-nestedgrid',
  templateUrl: './nestedgrid.component.html',
  styleUrls: ['./nestedgrid.component.css']
})
export class NestedgridComponent  {
@ViewChild('myGrid' , {static:false}) myGrid: jqxGridComponent;
@ViewChild('mydrpGrid ', { static: false })mydrpGrid : jqxGridComponent;
@ViewChild('myDropDownButton', { static: false }) myDropDownButton: jqxDropDownButtonComponent;
source: any =
{
    datafields: [
        { name: 'FirstName' },
        { name: 'LastName' },
        { name: 'Title' },
        { name: 'Address' },
        { name: 'City' }
    ],
    root: 'Employees',
    record: 'Employee',
    id: 'EmployeeID',
    datatype: 'xml',
    url: '/assets/employees.xml'
};
employeesAdapter: any = new jqx.dataAdapter(this.source);
getWidth() : any {
if (document.body.offsetWidth < 850) {
  return '90%';
}

return 850;
}
ordersSource: any =
{
    datafields: [
        { name: 'EmployeeID', type: 'string' },
        { name: 'ShipName', type: 'string' },
        { name: 'ShipAddress', type: 'string' },
        { name: 'ShipCity', type: 'string' },
        { name: 'ShipCountry', type: 'string' },
        { name: 'ShippedDate', type: 'date' }
    ],
    root: 'Orders',
    record: 'Order',
    datatype: 'xml',
    url: '/assets/orderdetails.xml'
};
ordersDataAdapter = new jqx.dataAdapter(this.ordersSource, { autoBind: true });
nestedGrids: any[] = new Array();
// create nested grid.
initRowDetails = (index: number, parentElement: any, gridElement: any, record: any): void => {
    let id = record.uid.toString();
    let nestedGridContainer = parentElement.children[0];
    this.nestedGrids[index] = nestedGridContainer;
    let filtergroup = new jqx.filter();
    let filter_or_operator = 1;
    let filtervalue = id;
    let filtercondition = 'equal';
    let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
    // fill the orders depending on the id.
    let orders = this.ordersDataAdapter.records;
    let ordersbyid = [];
    for (let i = 0; i < orders.length; i++) {
        let result = filter.evaluate(orders[i]['EmployeeID']);
        if (result)
            ordersbyid.push(orders[i]);
    }
    let ordersSource = {
        datafields: [
            { name: 'EmployeeID', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        id: 'OrderID',
        localdata: ordersbyid
    }
    let nestedGridAdapter = new jqx.dataAdapter(ordersSource);
    if (nestedGridContainer != null) {
        let settings = {
            width: 780,
            height: 200,
            source: nestedGridAdapter,
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 200 },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 200 },
                { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 200 }
            ]
        };
        jqwidgets.createInstance(`#${nestedGridContainer.id}`, 'jqxGrid', settings);
    }
}

renderer = (row: number, column: any, value: string): string => {
    return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
}
rowdetailstemplate: any = {
    rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>', rowdetailsheight: 220, rowdetailshidden: true
};
ready = (): void => {
    this.myGrid.showrowdetails(1);
};
columns: any[] =
[
    { text: 'First Name', datafield: 'FirstName', width: 100, cellsrenderer: this.renderer },
    { text: 'Last Name', datafield: 'LastName', width: 100, cellsrenderer: this.renderer },
    { text: 'Title', datafield: 'Title', width: 180, cellsrenderer: this.renderer },
    { text: 'Address', datafield: 'Address', width: 300, cellsrenderer: this.renderer },
    { text: 'City', datafield: 'City', width: 170, cellsrenderer: this.renderer }
];
source1: any =
    {
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
      dataAdapter: any= new jqx.dataAdapter(this.source1);
      columns1: any[]=[
        {text: 'Country Id',datafield: 'Country_ID'},
        {text: 'Country Name',datafield: 'Name'},
        {text: 'Short Name',datafield: 'Sort_Name'},
        {text: 'IsActive',datafield: 'Active'},
        {text: 'Currency Id',datafield: 'Currency_ID'},
        {text: 'ISD Code',datafield: 'ISDCode'}
      ];
      ready1 = (): void => {
        this.mydrpGrid .selectrow(0);
    }
    myGridOnRowSelect(event: any): void {
        let args = event.args;
        let row = this.mydrpGrid.getrowdata(args.rowindex);
        console.log(row);
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['Country_ID'] + ' ' + row['Name'] + '</div>';
        this.myDropDownButton.setContent(dropDownContent);
    }
}
