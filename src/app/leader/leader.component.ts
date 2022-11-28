import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  requests=[
    {id:1,empName:"رزان العمودي",empId:"1111111",date:"09/27/2022",projectName:'الاستكشاف العام للاحافير الفقارية في المملكة العربية السعودية',cost:'2300',response:''},
    {id:2,empName:'لجين كمال',empId:'2121212',date:'08/28/2022',projectName:'المعادن الاستراتيجية في الدرع العربي',cost:'2300',response:'مرفوض'},
    {id:3,empName:'غيث هشام',empId:'3232323',date:'07/29/2022',projectName:'رحلة صحراء الربع الخالي',cost:'2300',response:'مقبول'}
  ]

}
