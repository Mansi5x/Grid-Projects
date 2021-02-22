import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
  selector: 'app-groupingexample',
  templateUrl: './groupingexample.component.html',
  styleUrls: ['./groupingexample.component.css']
})
export class GroupingexampleComponent implements OnInit {
@ViewChild ('GroupingGrid' , {static:false}) GroupingGrid: jqxGridComponent;
@ViewChild('myInput', { static: false }) myInput: jqxInputComponent;
@ViewChild('expandedGroupLog', { static: false }) expandedGroupLog: ElementRef;
@ViewChild('collapsedGroupLog', { static: false }) collapsedGroupLog: ElementRef;
source:any=
{
  datatype: 'json',
  datafields:[
    {name: 'Country_ID'},
      {name: 'Name' },
      {name: 'Sort_Name'},
      {name: 'Active'},
      {name: 'Currency_ID'},
      {name: 'ISDCode'}
  ],
    id: 'Country_ID',
    url:'http://localhost:52914/api/ServiceMaster/GetCountryMasters'
}
  getWidth() : any {
  if (document.body.offsetWidth < 850) {
    return '90%';
  }
  return 850;
}
countrygrupAdapter: any = new jqx.dataAdapter(this.source);
columns: any[] =
    [
       {text: 'Country Id', datafield: 'Country_ID' },
       {text: 'Country Name', datafield: 'Name'  },
       {text: 'Short Name', datafield: 'Sort_Name' },
       {text: 'IsActive', datafield: 'Active'  },
       {text: 'Currency Id', datafield: 'Currency_ID'  },
       {text: 'ISD Code', datafield: 'ISDCode'  }
    ];
 expandBtonClick(): void{
   let groupnum=this.myInput.val();
   if(!isNaN(groupnum)){
     this.GroupingGrid.expandgroup(groupnum);
   }
 };
 collapseBtnOnClick(): void{
   let groupnum = this.myInput.val();
   if (!isNaN(groupnum)){
     this.GroupingGrid.collapsegroup(groupnum);
   }
 };
 expandAllBtnOnClick():void{
   this.GroupingGrid.expandallgroups();
 };
 collapseAllBtnOnClick(): void {
  this.GroupingGrid.collapseallgroups();
};
 GroupingGridOnGroupExpand(event: any): void{
   let args = event.args;
   this.expandedGroupLog.nativeElement.innerHTML = 'Group:'
 + args.group + ', Level: ' + args.level;
 }
 GroupingGridOnGroupCollapse(event: any): void {
  let args = event.args;
  this.collapsedGroupLog.nativeElement.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level
}
  constructor() { }

  ngOnInit(): void {
  }

}
